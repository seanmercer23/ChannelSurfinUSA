import React, {Component} from 'react';
import Login from './Components/Login'
import Register from './Components/Register'
import Videos from './Components/Videos'
import User from './Components/User'
import './App.css';
import { readAllVideos, loginUser, registerUser, createVideo, readUser } from './Services/api-helper';
import {Route, Link} from 'react-router-dom'
import {withRouter} from 'react-router'
import decode from 'jwt-decode'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      videos: [],
      currentVideo: 0,
      registerFormData: {
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
      user_id: ""
    }
    this.handleLogin = this.handleLogin.bind(this)
    this.handleRegister = this.handleRegister.bind(this)
    this.authHandleChange = this.authHandleChange.bind(this)
    this.nextVideo = this.nextVideo.bind(this)
    this.previousVideo = this.previousVideo.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.newVideo = this.newVideo.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
    this.registerHandleChange = this.registerHandleChange.bind(this)
    this.handleRegisterLogin = this.handleRegisterLogin.bind(this)
    this.getUser = this.getUser.bind(this)
  }

  async componentDidMount() {
    this.getAllVideos()
    const checkUser = localStorage.getItem("jwt");
    if (checkUser) {
      const user = await decode(checkUser);
      this.setState({currentUser: user})
    }
    this.getUser(this.state.currentUser.user_id)
  }

//~~~~~~~~~~~~~~~~~~~~~~~~Auth~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  async handleLogin() {
    const userData = await loginUser(this.state.authFormData);
    this.setState({
      currentUser: decode(userData.token)
    })
    localStorage.setItem("jwt", userData.token)
    this.setState({authFormData: {
      username: "",
      password: ""
    }})
    this.getUser()
  }

  async handleRegisterLogin() {
    const userData = await loginUser(this.state.registerFormData);
    this.setState({
      currentUser: decode(userData.token)
    })
    localStorage.setItem("jwt", userData.token)
    this.setState({registerFormData: {
      username: "",
      password: "",
      bio: "",
      pic: ""
    }})
  }

  async handleRegister(e) {
    e.preventDefault();
    await registerUser(this.state.registerFormData);
    this.handleRegisterLogin();
    this.getUser()
  }

  handleLogout() {
    localStorage.removeItem("jwt");
    this.setState({
      currentUser: null
    })
  }

  registerHandleChange(e) {
    const { name, value } = e.target;
    this.setState(prevState => ({
      registerFormData: {
        ...prevState.registerFormData,
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
    const user = await readUser(this.state.currentUser.user_id)
    this.setState({currentUser: user})
  }
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Data~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  async getAllVideos() {
    const videos = await readAllVideos()
    this.setState({videos})
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
}
  render () {
    return (
      <div className="App">
      {this.state.currentUser && <div><h1>{this.state.currentUser.username}</h1>
      <Link to={`users/${this.state.currentUser.username}`}>Profile</Link>
      </div>}
        <Route exact path="/users/:username" render={() => (
          <User 
            currentUser = {this.state.currentUser}
            handleChange = {this.handleChange}
            newVideo = {this.newVideo}
            url = {this.state.videoUrl}
          />
        )}
          
        />
        <Route exact path="/videos" render={() => (
          <Videos
            videos={this.state.videos}
            currentVideo={this.state.currentVideo}
            currentUser={this.state.currentUser}
            next={this.nextVideo}
            previous={this.previousVideo} />)} />
        <Route exact path="/login" render={() => (
          <Login
            handleLogin={this.handleLogin}
            handleChange={this.authHandleChange}
            formData={this.state.authFormData}
            handleLogout={this.handleLogout} />)} />
        <Route exact path="/register" render={() => (
          <Register
            handleRegister={this.handleRegister}
            handleChange={this.registerHandleChange}
            formData={this.state.registerFormData}
            handleLogout={this.handleLogout} />)} />
      </div>
    );
  }
}

export default withRouter(App);
