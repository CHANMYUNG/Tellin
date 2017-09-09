let mongoose = require('mongoose');

module.exports = () => {
    mongoose.Promise = global.Promise;
    // process.env는 환경변수에 접근함.
    const connection = mongoose.createConnection(process.env.TELLIN_DB_URL);
    connection.on('error', console.error.bind(console, 'mongoose connection error.'));
    connection.on('open', function () {
        console.log(`Connected to database - ${mongoose.connection.db.databaseName}`);
    });
    connection.on('disconnected', () => {
        console.log(`Disconnected to database`);
    });
};