const Model = require('../component/Model');
const Book = require('../component/models/Books');

module.exports = async (req, res) => {
    
    const { 
        title,
        author,
        genre
    } = req.body;

    try {
        const book = await Book.find({$or: [
            { title: title },
            { author: author },
            { genre: genre }
        ]});

        res.json(book);
    }
    catch(err){
        console.log(err);
        res.status(500);
    }
}