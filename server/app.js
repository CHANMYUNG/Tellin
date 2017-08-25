const express = require('express');
const morgan = require('morgan');
const database = require('./database');
const bodyParser = require('body-parser');
const router = require('./routes');

const app = express();

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

app.set('port', 8080);

// process.env는 환경변수에 접근함.
app.set('jwt-secret', process.env.TELLIN_JWT_SECRET);

app.use('/', router);

app.listen(app.get('port'), () => {
    console.log(`NOW, SERVER IS RUNNING ON ${app.get('port')} PORT.`);
    database();
})