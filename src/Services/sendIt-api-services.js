import config from '../config'

const sendItApiService ={

  postUser(user){
    return fetch(`${config.API_ENDPOINT}/register`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => 
        (!res.ok)
        ? res.json().then(error => Promise.reject(error))
        : res.json()
        )
  },
  postLogin(user){
    return fetch(`${config.API_ENDPOINT}/auth/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => 
      (!res.ok)
      ? res.json().then(error => Promise.reject(error))
      : res.json()
      )
  },
  getClimbs(user_id){
    return fetch(`${config.API_ENDPOINT}/climbs/${user_id}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      },
    })
    .then(res => 
      (!res.ok)
      ? res.json().then(error => Promise.reject(error))
      : res.json()
      )
  },
  getHighestDifficulty(user_id){
    return fetch(`${config.API_ENDPOINT}/data/${user_id}/highest_difficulty`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      },
    })
    .then(res =>
      (!res.ok)
      ? res.json().then(error => Promise.reject(error))
      : res.json()
      )
  },
  getTotalAttempts(user_id){
    return fetch(`${config.API_ENDPOINT}/data/${user_id}/total_attempts`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      },
    })
    .then(res =>
      (!res.ok)
      ? res.json().then(error => Promise.reject(error))
      : res.json()
      )
  },
  getTotalProjectsPerDifficulty(user_id, difficulty){
    return fetch(`${config.API_ENDPOINT}/data/${user_id}/total_projects/${difficulty}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      },
    })
    .then(res =>
      (!res.ok)
      ? res.json().then(error => Promise.reject(error))
      : res.json()
      )
  },
  getAttemptsPerDifficulty(user_id, difficulty){
    return fetch(`${config.API_ENDPOINT}/data/${user_id}/attempts_per_difficulty/${difficulty}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      },
    })
    .then(res =>
      (!res.ok)
      ? res.json().then(error => Promise.reject(error))
      : res.json()
      )
  }
}

export default sendItApiService;