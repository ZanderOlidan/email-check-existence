var emailCheck = require('email-check');
emailCheck('zanderuuuuulaksdjflskdjf@gmail.com', {
  timeout: 3000
})
  .then(function (res) {
    if (res) {
        console.log('found');
    } else {
        console.log('not found');
    }
  })
  .catch(function (err) {
    if (err.message === 'refuse'){
        console.log('refused. Probably doesnt exist too');
    } else {
        console.log('some random error happened');
    }
  });
