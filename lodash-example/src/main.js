const _ = require('lodash');

const users = [
  { user: 'barney', age: 36, active: true },
  { user: 'fred', age: 40, active: false }
];

const names = _.pluck(users, 'user');
console.log(names); // Output: ['barney', 'fred']
