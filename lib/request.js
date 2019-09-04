module.exports = function(url, options, callback) {
  fetch(url)
  .then(response => 
    response.text().then(body => callback(null, response, body))
  ).catch(error => {
    callback(error);
  });
}