let mongoose = require('mongoose');

const server = `mongodb+srv://User1234567890:${process.env.PASSWORD}@cluster0.njygs.mongodb.net/?retryWrites=true&w=majority`;

const database = 'MrStealth';

class Database {
    constructor() {
        this._connect()
    }

    _connect() {
        mongoose.connect(server)
        .then(() => {
            console.log('Database connection successful')
        })
        .catch(err => {
            console.error('Database connection error')
        })
    }
}

module.exports = new Database()