import React from 'react'
import ReactPlayer from 'react-player'
import CreateForm from './CreateForm'
import NextButton from '../assets/Actions-go-up-icon.png'
import PreviousButton from '../assets/Actions-go-down-icon.png'
import {Link, Redirect} from 'react-router-dom'

function Videos(props) {
    const token = localStorage.getItem('jwt')
    return (
        <div className="videos">
        {!token && <Redirect to="/login" />}
            {props.videos[0] &&
                <div className="screen">
                    <ReactPlayer 
                        url={props.videos[props.currentVideo].url}  
                        playing={true}
                        style={{pointerEvents: "initial"}}
                        />
                </div>
            }
            <div className="frame">
                <img className="frame-image" src="https://i.imgur.com/ZrSCTtE.png" alt="frame"/>
            </div>
            <div className="buttons">
                <img
                    className="channel"
                    id="next"
                    onClick= {props.next}
                    src={NextButton}
                />
                <br />
                <img
                    src={PreviousButton}
                    className="channel"
                    id="previous"
                    onClick= {props.previous}
                />
             </div>
             {props.currentUser && <Link to={`users/${props.currentUser.username}`}><button className="toProfile">Profile</button></Link>}
             <button onClick={props.handleLogout} className="logout">Logout</button>
            <CreateForm
                currentUser = {props.currentUser} 
                handleChange = {props.handleChange}
                // videoForm = {props.videoForm}
                newVideo = {props.newVideo}
                url = {props.url}
            />
        </div>
    )
}

export default Videos