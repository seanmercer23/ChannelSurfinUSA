const baseUrl = 'http://localhost:3000'

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

const updateVideo = (id, data) => {
  const opts = {
    method: 'PUT',
    body: JSON.stringify({ video: data }),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  return fetch(`${baseUrl}/videos/${id}`, opts)
    .then(resp => resp.json())
}

const destroyVideo = (id) => {
  const opts = {
    method: 'DELETE'
  }
  return fetch(`${baseUrl}/videos/${id}`, opts)
}

export {
  createVideo,
  readAllVideos,
  updateVideo,
  destroyVideo
}