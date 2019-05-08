import React from 'react'
import CreateForm from './CreateForm'
import EditForm from './EditForm';
import {withRouter} from 'react-router'

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
            <EditForm 
                currentUser = {props.currentUser} 
                handleUserChange = {props.handleUserChange}
                formData = {props.formData}
                putUser = {props.putUser}
                getUser = {props.getUser}
            />
            <button onClick={props.deleteUser}>Delete Account</button>
            <button onClick={props.handleLogout}>Logout</button>
            </React.Fragment>
            }
        </div>
    )   
}

export default withRouter(User)