// fetch API servicve for all project

import {BASE_URL} from '../utils/constants';

// handling response layer
// here we can handle all kinds of error including 401, 400, ..etc

async function handleErrors(response) {
  if (response.status >= 200 && response.status < 400) {
    return response.json();
  } else {
    const body = await response.json();
    const err = new Error(body.Error);
    throw err;
  }
}

const api = {
  getData(URL, Method, body, token) {
    let authToken = token;

    const headers = {
      'Content-Type': 'application/json',
    };

    if (authToken) {
      headers.Authorization = authToken;
    }

    let encodedBody = null;
    if (body) {
      encodedBody = JSON.stringify(body);
    }

    return fetch(BASE_URL + URL, {
      method: Method,
      headers,
      body: encodedBody,
    }).then(handleErrors);
  },
};

export default api;
