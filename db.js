let mongoose = require('mongoose');

const server = `mongodb+srv://MrStealth:${process.env.PASSWORD}@cluster0.njygs.mongodb.net/test`;
const database = 'MrStealth';

class Database {
    constructor() {
        this._connect()
    }

    _connect() {
        mongoose.connect(`mongodb://${server}/${database}`)
        .then(() => {
            console.log('Database connection successful')
        })
        .catch(err => {
            console.error('Database connection error')
        })
    }
}

module.exports = new Database()