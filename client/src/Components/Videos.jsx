import React from 'react'
import ReactPlayer from 'react-player'
import CreateForm from './CreateForm'
import NextButton from '../assets/Actions-go-up-icon.png'
import PreviousButton from '../assets/Actions-go-down-icon.png'
import PlayButton from '../assets/Play-Hot-icon.png'

function Videos(props) {
    return (
        <div className="videos">
            {props.videos[0] &&
                <div className="screen">
                    <ReactPlayer 
                        url={props.videos[props.currentVideo].url}  
                        playing={false}
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
             <img src={PlayButton} className="play-pause" onClick={props.playPause} />
            <CreateForm
                currentUser = {props.currentUser} 
                handleChange = {props.handleChange}
                videoForm = {props.videoForm}
                newVideo = {props.newVideo}
            />
        </div>
    )
}

export default Videos