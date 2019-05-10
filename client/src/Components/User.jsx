import React from 'react'
import EditForm from './EditForm';
import {withRouter} from 'react-router'
import {Link, Redirect} from 'react-router-dom'

function User (props) {
    const user = props.currentUser
    let counter = 1
    const token = localStorage.getItem('jwt')
    return (
        <div className="profile">
        {!token && <Redirect to="/login"/>}
            {props.currentUser &&
            <div className="user">
                <div className="userInfo">
                    <h1>{user.username}</h1>
                    <EditForm 
                        currentUser = {props.currentUser} 
                        handleUserChange = {props.handleUserChange}
                        formData = {props.formData}
                        putUser = {props.putUser}
                        getUser = {props.getUser}
                    />
                    <div className="profileButtons">
                        <Link to="/videos"><button>Channel Surf</button></Link>
                        &nbsp;
                        <button onClick={props.deleteUser}>Delete Account</button>
                        &nbsp;
                        <button onClick={props.handleLogout}>Logout</button>
                    </div>
                    <img className="profPic" 
                    src={
                        user.pic 
                        ? 
                        user.pic
                        :
                        "https://tinyurl.com/k88p4we"
                        } 
                        alt="profile pic" 
                    />
                    <div className='userVids'>
                    <h3>Your Videos</h3>
                    <div className="links">
                        {props.userVids.map(video => (
                            <React.Fragment key={video.id}>
                                    <a href={video.url}>{`#${counter++}`}</a>
                            </React.Fragment>
                        ))}
                    </div>
                    </div>
                    <p>
                        {
                        user.bio 
                        ?
                        user.bio
                        :
                        "No bio entered"
                        }
                    </p>
                </div>
            </div>
            }
        </div>
    )   
}

export default withRouter(User)