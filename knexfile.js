// Update with your config settings.
require('dotenv').config();

module.exports = {
  development: {
    client: 'postgresql',
    connection: 'postgres://localhost/my_life'
  },
  production: {
    client: 'postgresql',
    // connection: process.env.DATABASE_URL + '?ssl=true'
    // connection: process.env.DATABASE_URL + 'https://cws-fullstackapp.herokuapp.com/' + '?ssl=true'
    // connection: 'postgres://kihnrktpvxmemj:d705f319be9ee719ddb8bb617840f7e59363e7e535e0bb3231e5ca2c56801567@ec2-23-23-244-83.compute-1.amazonaws.com'
    connection: process.env.DATABASE_URL
  },

};
