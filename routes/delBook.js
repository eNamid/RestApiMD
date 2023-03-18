const Model = require('../component/Model');
const Book = require('../component/models/Books');
const ObjectId = require('mongodb').ObjectId;

module.exports = async (req, res) => {

    try {
        await Book.deleteOne({

            _id: new ObjectId(`${req.params.id}`)

        });

        res.sendStatus(200);
    }
    catch(err){
        console.log(err);
        res.sendStatus(500);
    }
}