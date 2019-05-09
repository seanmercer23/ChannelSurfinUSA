import React from 'react'

function EditForm (props) {
    return (
        <div className="login edit">
            <form className="loginForm" onSubmit={props.putUser}>
                <h2>Update your profile</h2>
                <input 
                    type="text" 
                    placeholder="username"
                    name="username"
                    value={props.formData.username}
                    onChange={props.handleUserChange}/>
                <input 
                    type="text" 
                    name="pic"
                    placeholder="pic"
                    value={props.formData.pic}
                    onChange={props.handleUserChange}/>
                <input 
                    type="text" 
                    name="bio"
                    placeholder="bio"
                    value={props.formData.bio}
                    onChange={props.handleUserChange}/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default EditForm