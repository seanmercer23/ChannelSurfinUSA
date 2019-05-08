import React from 'react'
import EditForm from './EditForm';
import {withRouter} from 'react-router'

function User (props) {
    const user = props.currentUser
    let counter = 1
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
            <EditForm 
                currentUser = {props.currentUser} 
                handleUserChange = {props.handleUserChange}
                formData = {props.formData}
                putUser = {props.putUser}
                getUser = {props.getUser}
            />
            <br />
            <button onClick={props.deleteUser}>Delete Account</button>
            &nbsp;
            <button onClick={props.handleLogout}>Logout</button>
            <br />
            <h3>Your Videos</h3>
            {props.userVids.map(video => (
                <React.Fragment key={video.id}>
                    <a href={video.url}>{`#${counter++}`}</a>
                    &nbsp;
                    &nbsp;
                </React.Fragment>
            ))}
            </React.Fragment>
            }
        </div>
    )   
}

export default withRouter(User)