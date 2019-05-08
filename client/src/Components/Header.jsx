import React from 'react'
import {Link} from 'react-router-dom'

function Header (props) {
    return (
        <div className="header">
            <h1 className="title">ChannelSurfinUSA</h1>
            <nav>
                <ul>
                    <li><Link to={`users/${props.currentUser.username}`}>Profile</Link></li>
                    <li><Link to='/videos'>Surf</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header