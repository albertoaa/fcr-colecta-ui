import axios from 'axios'

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.timeout = 20000;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.withCredentials = false;

export const emailLookup = (email) => {
  return axios.get('/email_lookup', {
    params: {
      email: email
    }
  })
    .then(response => ({ response }))
    .catch(error => ({ error }))
}
