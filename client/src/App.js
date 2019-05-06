import React, {Component} from 'react';
import Login from './Components/Login'
import Register from './Components/Register'
import Videos from './Components/Videos'
import './App.css';
import { readAllVideos, loginUser, registerUser } from './Services/api-helper';
import {Route} from 'react-router-dom'
import decode from 'jwt-decode'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      videos: [],
      currentVideo: 0,
      authFormData: {
        username: "",
        password: ""
      },
      currentUser: null
    }
    this.handleLogin = this.handleLogin.bind(this)
    this.handleRegister = this.handleRegister.bind(this)
    this.authHandleChange = this.authHandleChange.bind(this)
    this.nextVideo = this.nextVideo.bind(this)
    this.previousVideo = this.previousVideo.bind(this)
  }

  componentDidMount() {
    this.getAllVideos()
    const checkUser = localStorage.getItem("jwt");
    if (checkUser) {
      const user = decode(checkUser);
      this.setState({
        currentUser: user
      })
    }
  }

  async handleLogin() {
    const userData = await loginUser(this.state.authFormData);
    this.setState({
      currentUser: decode(userData.token)
    })
    localStorage.setItem("jwt", userData.token)
  }

  async handleRegister(e) {
    e.preventDefault();
    await registerUser(this.state.authFormData);
    this.handleLogin();
  }

  handleLogout() {
    localStorage.removeItem("jwt");
    this.setState({
      currentUser: null
    })
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

  render () {
    return (
      <div className="App">
      {this.state.currentUser && <h1>{this.state.currentUser.username}</h1>}
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
            formData={this.state.authFormData} />)} />
        <Route exact path="/register" render={() => (
          <Register
            handleRegister={this.handleRegister}
            handleChange={this.authHandleChange}
            formData={this.state.authFormData} />)} />
      </div>
    );
  }
}

export default App;
