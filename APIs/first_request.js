const axios = require('axios');


// Make a request for a user with a given ID
axios.get('https://jsonplaceholder.typicode.com/users/1')

  .then(function (response) {
    // handle success
	const parseData = JSON.parse(body);
    console.log(parseData['name']);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });