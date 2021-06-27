const baseUrl = 'https://auth.nomoreparties.co'

export const register = (email, password) => {
  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "email": email,
      "password": password
    })
  })
  .then((response) => {
    return response.json();
  })
  .then((res) => {
    return res;
  })
  .catch((err) => console.log(err));
}

export const login = (email, password) => {
  return fetch(`${baseUrl}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "email" : email,
      "password" : password
    })
  })
  .then((response) => {
    return response.json();
  })
  .then((res) => {
    return res;
  })
  .catch((err) => console.log(err));
}

export const checkToken = (token) => {
  return fetch(`${baseUrl}/users/me`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    }
  })
  .then(res => res.json())
  .then(data => data)
  .catch((err) => console.log(err));
}