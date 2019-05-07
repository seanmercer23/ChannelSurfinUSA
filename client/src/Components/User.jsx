import React from 'react'
import CreateForm from './CreateForm'

function User (props) {
    const user = props.currentUser
    return (
        <div>
            {props.currentUser &&
            <React.Fragment>
                <h1>{user.username}</h1>
                <img 
                src={
                    user.pic 
                    ? 
                    user.pic
                    :
                    "https://tinyurl.com/k88p4we"
                    } 
                    alt="profile pic" 
                />
                <p>
                    {
                    user.bio 
                    ?
                    user.bio
                    :
                    "No bio entered"
                    }
                </p>
                <CreateForm
                currentUser = {props.currentUser} 
                handleChange = {props.handleChange}
                videoForm = {props.videoForm}
                newVideo = {props.newVideo}
            />
            </React.Fragment>
            }
        </div>
    )   
}

export default User