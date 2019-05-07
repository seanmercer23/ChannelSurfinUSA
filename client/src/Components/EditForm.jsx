import React from 'react'

function EditForm (props) {
    return (
        <div>
            <h2>Update your profile</h2>
            <form onSubmit={props.updateUser}>
                <label>Username:</label>
                <input 
                    type="text" 
                    name="username"
                    value={props.currentUser.username}
                    onChange={props.handleChange}/>
                <label>Picture:</label>
                <input 
                    type="text" 
                    name="pic"
                    value={props.currentUser.pic}
                    onChange={props.handleChange}/>
                <label>Bio:</label>
                <input 
                    type="text" 
                    name="bio"
                    value={props.currentUser.bio}
                    onChange={props.handleChange}/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default EditForm