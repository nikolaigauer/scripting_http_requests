var https = require('https');

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

function printHTML (html) {
  console.log(html);
}

module.exports = function getHTML (options, callback) {
     /* Add your code here */

// notice that https.get takes a callback with one parameter -
// response, which is a Stream that represents the HTTP response
https.get(options, function (response) { // changed from requestOptions to options
  var str = '';

  // set encoding of received data to UTF-8
  response.setEncoding('utf8');

  // the callback is invoked when a `data` chunk is received
  response.on('data', function (chunk) {
    str += chunk;
    console.log('Chunks Received and appended to each other: ');
  });

  // the callback is invoked when all of the data has been received
  // (the `end` of the stream)
  response.on('end', function() {
    // console.log(str);
    callback(str)

  });


});
}
