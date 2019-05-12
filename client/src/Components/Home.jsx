import React from 'react'
import {Link} from 'react-router-dom'

function Home () {
    return (
        <div className="home">
            <h1 className="bounce-in-top">Welcome to ChannelSurfinUSA!!!</h1>
            <p className="bounce-in-left">ChannelSurfinUSA aims to recapture the nostalgic feeling of lazily flipping through channels to see what's on. <br />
            Hopefully during your time here while you channel surf you're able to find something new and fun! <br />
            Log in or Register below to start your adventure today!</p>
            <h3 className="bounce-in-bottom"><Link to="/login">Log in</Link> | <Link to="/register">Register</Link></h3>
        </div>
    )
}

export default Home