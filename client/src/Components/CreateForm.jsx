import React from 'react'

function CreateForm (props) {
    return (
        <div>
            <h2>Add a new video</h2>
            <form onSubmit={props.newVideo}>
                <label>Video url here:</label>
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