const fs = require('fs');
const mongoose = require('mongoose');
const path = require('path');

let db = {};

const dirname = path.join(__dirname, 'models');

const DB_URL = `mongodb+srv://dima:pass@books.aofsge9.mongodb.net/?retryWrites=true&w=majority`;

const mongo_db = mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>console.log('MongoDB is connected'))
.catch(e=>console.log(e));

fs
    .readdirSync(dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
        const model = require(path.join(dirname, file));
        db[model.name] = model;
    });

db.mongo_db = mongo_db;
db.mongoose = mongoose;

module.exports = db;
