let mongoose = require('mongoose');

module.exports = () => {
    mongoose.Promise = global.Promise;
    mongoose.connect(process.env.TELLIN_DB_URL);
    mongoose.connection.on('error', console.error.bind(console, 'mongoose connection error.'));
    mongoose.connection.on('open', function () {
        // process.env는 환경변수에 접근함.
        console.log(`Connected to database - ${mongoose.connection.db.databaseName}`);
    });
    mongoose.connection.on('disconnected', () => {
        this();
    });
};