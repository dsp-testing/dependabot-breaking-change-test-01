const _ = require('lodash');

function getNames(users) {
  return _.map(users, 'user');
}

// Test function
function testGetNames() {
  const users = [
    { user: 'barney', age: 36, active: true },
    { user: 'fred', age: 40, active: false }
  ];

  const expected = ['barney', 'fred'];
  const result = getNames(users);

  if (_.isEqual(result, expected)) {
    console.log('Test passed!');
    process.exit(0); // Success
  } else {
    console.log('Test failed!');
    process.exit(1); // Failure
  }
}

testGetNames();
