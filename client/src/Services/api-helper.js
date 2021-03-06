const baseUrl = 'https://channelsurfusa.herokuapp.com/'

export const loginUser = (loginData) => {
  const opts = {
    method: 'POST',
    body: JSON.stringify(loginData),
    headers: {
      'Content-Type': 'application/json'
    }
  };

  return fetch(`${baseUrl}/auth/login`, opts)
    .then(resp => resp.json())
}

export const registerUser = (registerData) => {
  const opts = {
    method: 'POST',
    body: JSON.stringify({ user: registerData }),
    headers: {
      'Content-Type': 'application/json'
    }
  };

  return fetch(`${baseUrl}/users/`, opts)
    .then(resp => resp.json())
}

const createVideo = (data) => {
  const opts = {
    method: 'POST',
    body: JSON.stringify({ video: data }),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  return fetch(`${baseUrl}/videos`, opts)
    .then(resp => resp.json())
}

const readAllVideos = () => {
  return fetch(`${baseUrl}/videos`)
    .then(resp => resp.json())
}
const readUser = (id) => {
  return fetch(`${baseUrl}/users/${id}`)
  .then(resp => resp.json())
}
const updateUser = (id, data) => {
  const opts = {
    method: 'PUT',
    body: JSON.stringify({ user: data }),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  return fetch(`${baseUrl}/users/${id}`, opts)
    .then(resp => resp.json())
}

const destroyUser = (id) => {
  const opts = {
    method: 'DELETE'
  }
  return fetch(`${baseUrl}/users/${id}`, opts)
}

export {
  createVideo,
  readAllVideos,
  updateUser,
  destroyUser,
  readUser
}