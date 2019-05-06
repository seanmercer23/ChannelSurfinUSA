import React from 'react'
import ReactPlayer from 'react-player'
import {withRouter} from 'react-router'

function Videos(props) {
    return (
        <div>
        {props.videos[0] && 
         <ReactPlayer url={props.videos[0].url} />}
         <button
          onClick= {
            console.log("hello")
          }
         >Next video</button>
        </div>
    )
}

export default withRouter(Videos)