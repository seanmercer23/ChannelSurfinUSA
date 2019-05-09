import React, {Component} from 'react';
import Login from './Components/Login'
import Register from './Components/Register'
import Videos from './Components/Videos'
import User from './Components/User'
import './App.css';
import { readAllVideos, loginUser, registerUser, createVideo, readUser, updateUser, destroyUser } from './Services/api-helper';
import {Route} from 'react-router-dom'
import {withRouter} from 'react-router'
import decode from 'jwt-decode'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      videos: [],
      currentVideo: 0,
      userFormData: {
        username: "",
        password: "",
        bio: "",
        pic: ""
      },
      authFormData: {
        username: "",
        password: ""
      },
      currentUser: null,
      videoUrl: "",
      user_id: "",
      userVids: []
    }
    this.handleLogin = this.handleLogin.bind(this)
    this.handleRegister = this.handleRegister.bind(this)
    this.authHandleChange = this.authHandleChange.bind(this)
    this.nextVideo = this.nextVideo.bind(this)
    this.previousVideo = this.previousVideo.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.newVideo = this.newVideo.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
    this.handleUserChange = this.handleUserChange.bind(this)
    this.handleRegisterLogin = this.handleRegisterLogin.bind(this)
    this.getUser = this.getUser.bind(this)
    this.putUser = this.putUser.bind(this)
    this.deleteUser = this.deleteUser.bind(this)
    this.getUserVideos = this.getUserVideos.bind(this)
  }

  async componentDidMount() {
    const checkUser = localStorage.getItem("jwt");
    if (checkUser) {
      const user = await decode(checkUser);
      this.setState({currentUser: user})
    }
    if(this.state.currentUser) {
      this.getUser()
    }
    await this.getAllVideos()
    if(this.state.currentUser) {
    this.getUserVideos()
    }
  }

//~~~~~~~~~~~~~~~~~~~~~~~~Auth~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  async handleLogin() {
    try {
      const userData = await loginUser(this.state.authFormData);
      this.setState({
        currentUser: decode(userData.token)
      })
      localStorage.setItem("jwt", userData.token)
      this.setState({authFormData: {
        username: "",
        password: ""
      }})
      await this.getUser()
      this.props.history.push(`/users/${this.state.currentUser.username}`)  
    } catch (error) {
      console.log(error)
      alert("Invalid credentials try again")
      this.setState({authFormData: {
        username: "",
        password: ""
      }})
    }
  }

  async handleRegisterLogin() {
    const userData = await loginUser(this.state.userFormData);
    this.setState({
      currentUser: decode(userData.token)
    })
    localStorage.setItem("jwt", userData.token)
    this.setState({userFormData: {
      username: "",
      password: "",
      bio: "",
      pic: ""
    }})
  }

  async handleRegister(e) {
    e.preventDefault();
    await registerUser(this.state.userFormData);
    await this.handleRegisterLogin();
    await this.getUser()
    this.props.history.push(`/users/${this.state.currentUser.username}`)  
  }

  handleLogout() {
    localStorage.removeItem("jwt");
    this.setState({
      currentUser: null
    })
    this.props.history.push('/login')
  }

  handleUserChange(e) {
    const { name, value } = e.target;
    this.setState(prevState => ({
      userFormData: {
        ...prevState.userFormData,
        [name]: value
      }
    }));
  }

  authHandleChange(e) {
    const { name, value } = e.target;
    this.setState(prevState => ({
      authFormData: {
        ...prevState.authFormData,
        [name]: value
      }
    }));
  }

  async getUser() {
    const user = await readUser(this.state.currentUser.user_id || this.state.currentUser.id)
    this.setState({currentUser: user})
  }
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Data~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  async getAllVideos() {
    const videos = await readAllVideos()
    this.setState({videos})
    if(this.state.currentUser) {
    this.getUserVideos()
    }
  }

nextVideo() {
  let currentVideo = this.state.currentVideo
  if (currentVideo === (this.state.videos.length - 1)){
      currentVideo = 0
      this.setState({currentVideo})} 
      
  else {
      currentVideo++
      this.setState({currentVideo})
    }
  }

previousVideo() {
  let currentVideo = this.state.currentVideo
  if (currentVideo > 0){
      currentVideo--
      this.setState({currentVideo})} 
  else {
    currentVideo = (this.state.videos.length - 1)
    this.setState({currentVideo})
  }
}

handleChange(e) {
  const {name, value} = e.target
  this.setState(prevState => ({
      ...prevState.videoForm,
      [name]: value
  }))
}

async putUser(e) {
  e.preventDefault()
  let data = {
    username: this.state.userFormData.username || this.state.currentUser.username,
    password_digest: this.state.currentUser.password_digest,
    bio: this.state.userFormData.bio || this.state.currentUser.bio,
    pic: this.state.userFormData.pic || this.state.currentUser.pic
  }
  await updateUser(this.state.currentUser.id, data)
  this.getUser()
}

async newVideo(e) {
  e.preventDefault()
  const createdVideo = {
    url: this.state.videoUrl,
    user_id: this.state.currentUser.id
  }
  const video = await createVideo(createdVideo)
  this.setState(prevState => ({
    videos: [...prevState.videos, video],
      videoUrl: "",
      user_id: ""
  }))
  this.getAllVideos()
}

async deleteUser() {
  await destroyUser(this.state.currentUser.id)
  this.handleLogout()
}

getUserVideos() {
  const userVids = this.state.videos.filter(video => video.user_id === this.state.currentUser.id)
  this.setState({userVids})
}
  render () {
    return (
      <div className="App">
        <Route exact path="/users/:username" render={() => (
          <User 
            currentUser = {this.state.currentUser}
            handleChange = {this.handleChange}
            handleUserChange = {this.handleUserChange}
            newVideo = {this.newVideo}
            url = {this.state.videoUrl}
            formData = {this.state.userFormData}
            putUser = {this.putUser}
            getUser = {this.getUser}
            deleteUser = {this.deleteUser}
            handleLogout = {this.handleLogout}
            userVids = {this.state.userVids}
          />
        )}
        />
        <Route exact path="/videos" render={() => (
          <Videos
            url = {this.state.videoUrl}
            newVideo = {this.newVideo}
            videos={this.state.videos}
            handleChange = {this.handleChange}
            currentVideo={this.state.currentVideo}
            currentUser={this.state.currentUser}
            next={this.nextVideo}
            previous={this.previousVideo} 
            handleLogout = {this.handleLogout}/>)} />
        <Route exact path="/login" render={() => (
          <Login
            handleLogin={this.handleLogin}
            handleChange={this.authHandleChange}
            formData={this.state.authFormData}
            handleLogout={this.handleLogout} />)} />
        <Route exact path="/register" render={() => (
          <Register
            handleRegister={this.handleRegister}
            handleChange={this.handleUserChange}
            formData={this.state.userFormData}
            handleLogout={this.handleLogout} />)} />
      </div>
    );
  }
}

export default withRouter(App);
