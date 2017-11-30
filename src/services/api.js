const headers = {
  'Content-Type': 'application/json',
  Accepts: 'application/json',
  Authorization: localStorage.getItem('token')
};

const API_ROOT = `http://localhost:3001/api/v1`;

const getPaintings = () => {
  return fetch(`${API_ROOT}/paintings/`).then(res => res.json());
};

const getCurrentUser = () => {
  return fetch(`${API_ROOT}/current_user`, {
    headers
  }).then(res => res.json());
};

const login = data => {
  return fetch(`${API_ROOT}/login`, {
    method: 'POST',
    headers,
    body: JSON.stringify(data)
  }).then(res => res.json());
};

const logout = () => {
  return fetch(`${API_ROOT}/logout`, {
    method: 'DELETE',
    headers
  }).then(res => res.json());
};

export const api = {
  auth: {
    getCurrentUser,
    login,
    logout
  },
  paintings: {
    getPaintings
  }
};
