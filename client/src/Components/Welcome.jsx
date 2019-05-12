import React from 'react'
import {Link} from 'react-router-dom'

function Welcome () {
    return (
        <div className="welcome fade-in">
            <Link to="/home"><h1>Enter</h1></Link>
        </div>
    )
}

export default Welcome