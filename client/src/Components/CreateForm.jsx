import React from 'react'

function CreateForm (props) {
    return (
        <div className="create">
            <h3>Add a new video</h3>
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