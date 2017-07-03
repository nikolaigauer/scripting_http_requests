var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

// function reverseString(html) {
//     console.log(html.split('').reverse().join(''))
// }
// reverseString('dwayne');

function printReverse (html) {
   console.log(html.split('').reverse().join(''))
  /* Write your code here! */

}

getHTML(requestOptions, printReverse);
