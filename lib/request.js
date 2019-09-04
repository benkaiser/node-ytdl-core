exports = function(url, options, callback) {
  fetch(url)
  .then(response => 
    response.body().then(body => callback(null, response, body))
  ).catch(error => {
    callback(error);
  });
}