import React from 'react'
import ReactPlayer from 'react-player'
import CreateForm from './CreateForm'

function Videos(props) {
    return (
        <div>
            {props.videos[0] &&
                <div className="screen">
                    <ReactPlayer url={props.videos[props.currentVideo].url}  playing={false}/>
                </div>
            }
            <div className="frame">
            <img src="https://i.imgur.com/fv3d8hM.png" alt="frame"/>
            </div>
            <button
            className="channel"
            id="previous"
            onClick= {props.previous}
            >
            </button>
            <button
            className="channel"
            id="next"
            onClick= {props.next}
            >
            </button>
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