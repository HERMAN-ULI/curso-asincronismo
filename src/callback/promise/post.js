import fetch from 'node-fetch';

const API = 'https://api.escuelajs.co/api/v1';

function postData(urlApi, data) {
  const response = fetch(urlApi, {
    method: 'POST',
    mode: 'cors',
    credentials: 'same-origin',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return response;
}

const data = {
  title: '223',
  price: 223,
  description: 'A description',
  categoryId: 1,
  images: ['https://placeimg.com/640/480/any'],
};

postData(`${API}/products`, data)
  .then((response) => response.json())
  .then((data) => console.log(data));

import fetch from 'node-fetch';

const API = 'https://api.escuelajs.co/api/v1';

async function postData(urlApi, data) {
  const response = await fetch(urlApi, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  const result = await response.json();
  console.log(result);
}

const data = {
  title: 'New Product course',
  price: 99996,
  description: 'A description',
  categoryId: 1,
  images: ['https://placeimg.com/640/480/any'],
};

postData(`${API}/products`, data);
