const BASE_URL = `http://localhost:3000/api/v1`;

export const Product = {
  all() {
    return fetch(`${BASE_URL}/products`, {
      credentials: 'include',
    }).then(res => res.json());
  },
  one(id) {
    return fetch(`${BASE_URL}/products/${id}`, {
      credentials: 'include',
    }).then(res => res.json());
  },
  create(params) {
    return fetch(`${BASE_URL}/products`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    }).then(res => res.json());
  },
};

export const Session = {
  create(params) {
    return fetch(`${BASE_URL}/sessions`, {
      method: 'POST',
      credentials: 'include',
      // to include the cookie when doing fetch, use
      // the "credentials" option with "include" for cross-origin
      // requests or with "same-origin" for same-origin
      // requests.
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    }).then(res => res.json());
  },
};
