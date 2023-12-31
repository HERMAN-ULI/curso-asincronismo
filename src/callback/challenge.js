const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi, callback) {
  let xhttp = new XMLHttpRequest();

  xhttp.open('GET', urlApi, true);

  xhttp.onreadystatechange = function (event) {
    if (xhttp.readyState === 4 && xhttp.status === 200) {
      callback(null, JSON.parse(xhttp.responseText));
    } else {
      const error = new Error('error' + urlApi);

      return callback(error, null);
    }
  };

  xhttp.send();
}

fetchData(`${API}/products`, function (err1, data1) {
  if (err1) return console.error(err1);
  fetchData(`${API}/products/${data1[2].id}`, function (err2, data2) {
    if (err2) return console.error(err2);
    fetchData(
      `${API}/categories/${data2?.category?.id}`,
      function (err3, data3) {
        if (err3) return console.error(err3);
        console.log(data1[2]);
        console.log(data2.title);
        console.log(data3.name);
      }
    );
  });
});
