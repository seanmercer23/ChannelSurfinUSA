import React from 'react'

function CreateForm (props) {
    return (
        <div className="create">
            <form className="loginForm" onSubmit={props.newVideo}>
                <h2>Add a new video</h2>
                <input 
                    type="text" 
                    name="videoUrl"
                    value={props.url}
                    onChange={props.handleChange}/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default CreateForm