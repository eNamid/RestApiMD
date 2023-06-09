const Model = require('../component/Model');
const Book = require('../component/models/Books');
const ObjectId = require('mongodb').ObjectId;

module.exports = async (req, res) => {
    
    const { 
        title,
        author,
        genre
    } = req.body;

    try {
        await Book.updateOne({

            _id: new ObjectId(`${req.params.id}`)

    }, {$set: {
            title: title,
            author: author,
            genre: genre
    }});

        res.sendStatus(200);
    }
    catch(err){
        console.log(err);
        res.sendStatus(500);
    }
}