# Channel Surfin USA
Channel Surfin USA is a full stack app built with a React front end and a Rails back end with a Postgres database. The purpose of this app is to recapture the nostalgic value of flipping through channels to see what's on and maybe being surprised by what you find. The additional value this app adds is that the user is able to add videos of their own choosing to the collection of videos on the app.  The hope is that ultimately this app will be able to bring some nostalgic value to users with a new age spin.

## Setup
* Fork and Clone this repo
* cd into the directory
* Bundle
* Rails db:create
* Rails db:migrate
* Rails db:seed
* Rails s
* cd Client
* npm i
* npm start
* happy hacking

## Wireframes
The original wirefames for this app can be found [here](https://drive.google.com/file/d/1wI9sFndfHJh8A7qU3WmBjWXStFqIYmmz/view?usp=sharing)

## ERD
![ChannelSurfinUSA ERD](https://i.imgur.com/KyCfh9r.png)

## Code Snippet
```nextVideo() {
  let currentVideo = this.state.currentVideo
  if (currentVideo === (this.state.videos.length - 1)){
      currentVideo = 0
      this.setState({currentVideo})}    
  else {
      currentVideo++
      this.setState({currentVideo})
    }
  }
```
The most interesting bit of code for this app in my opinion was the code to smoothly switch through the videos with no page reload.  All video links stored in the app's database are in an array in state and the index of the video that the user is currently seeing is represented by the state value "currentVideo" so in order to allow the user to smoothly be able to progress through all the videos with no page reloading or errors I had to set up this function with a conditional statement in it to reset the index back to the beginning if it were to exceed the number of the last index.  It's a small thing that I felt went a long way in improving the user experience.
