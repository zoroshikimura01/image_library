const DATA_URL = 'http://localhost:5000'

const getData = () => {
  return fetch(DATA_URL + '/', {
    method: 'GET'
  })
}

const addFavorite = (value) => {
  return fetch(DATA_URL + '/', {
    method: 'POST',
    headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
    body: JSON.stringify(value)
  })
}

const getFavorite = () => {
  return fetch(DATA_URL + '/favorite', {
    method: 'GET'
  })
}

const deleteFavorite = (id) => {
  return fetch(DATA_URL + `/${id}`, {
    method: 'DELETE',
    headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}
  }) 
}


const API = {
  getData,
  addFavorite,
  getFavorite,
  deleteFavorite
}

export default API;