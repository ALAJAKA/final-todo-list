const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    development: {
        username: process.env.MYSQL_AWS_ID,
        password: process.env.MYSQL_AWS_PASSWORD,
        database: process.env.MYSQL_AWS_DATABASE,
        host: process.env.MYSQL_AWS_HOST,
        dialect: 'mysql',
    },
    test: {
        username: 'root',
        password: process.env.MYSQL_AWS_PASSWORD,
        database: 'sold_out_mall_test_db',
        host: process.env.MYSQL_AWS_HOST,
        dialect: 'mysql',
        logging: false,
    },
    production: {
        username: 'root',
        password: null,
        database: 'sold_out_mall_production',
        host: '127.0.0.1',
        dialect: 'mysql',
    },
};
