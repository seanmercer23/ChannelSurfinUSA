import React from 'react'

function EditForm (props) {
    return (
        <div>
            <h2>Update your profile</h2>
            <form onSubmit={async (e) => {
                e.preventDefault()
                await props.putUser()
                props.getUser(props.currentUser.id)
            }}>
                <label>Username:</label>
                <input 
                    type="text" 
                    name="username"
                    value={props.formData.username}
                    onChange={props.handleUserChange}/>
                <label>Picture:</label>
                <input 
                    type="text" 
                    name="pic"
                    value={props.formData.pic}
                    onChange={props.handleUserChange}/>
                <label>Bio:</label>
                <input 
                    type="text" 
                    name="bio"
                    value={props.formData.bio}
                    onChange={props.handleUserChange}/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default EditForm