const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());

const router = require('./routes');
const {sequelize} = require("./models");


app.set('views', './templates');
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('static'));

app.use('/', router);

require('dotenv').config();

sequelize
    .sync({ force: true })
    .then(() => {
      console.log('데이터베이스 연결 성공!');
    })
    .catch((err) => {
      console.error(err);
    });

app.listen(process.env.PORT, () => {
  console.log(process.env.PORT, '포트로 서버가 열렸어요!');
});

module.exports = app;
