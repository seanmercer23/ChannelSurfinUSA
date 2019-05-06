import React from 'react'
import ReactPlayer from 'react-player'

function Videos(props) {
    return (
        <div>
            {props.videos[0] && 
            <ReactPlayer url={props.videos[props.currentVideo].url}  playing={false}/>}
            <button
            onClick= {props.next}
            >Next video</button>
            <button
            onClick= {props.previous}
            >Previous video</button>
        </div>
    )
}

export default Videos