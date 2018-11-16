const BASE_URL = `http://localhost:3000/api/v1`;

export const Product = {
  all() {
    return fetch(`${BASE_URL}/products`, {
      credentials: 'include',
    }).then(res => res.json());
  },
};
