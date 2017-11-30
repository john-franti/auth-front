const API_ROOT = `http://localhost:3001/api/v1`;

const headers = {
  'Content-Type': 'application/json',
  Accepts: 'application/json'
};

const getPaintings = () => {
  return fetch(`${API_ROOT}/paintings/`).then(res => res.json());
};

export const api = {
  auth: {
    //
  },
  paintings: {
    getPaintings
  }
};
