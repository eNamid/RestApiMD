const Model = require('../component/Model');
const Book = require('../component/models/Books');

module.exports = async (req, res) => {
    
    const __id = req.params.id;
    const { 
        title,
        author,
        genre
    } = req.body;

    try {
        const book = await Book.updateOne({
            id: __id,
    }, {
            title: title,
            author: author,
            genre: genre
    });

        res.json(book);
    }
    catch(err){
        console.log(err);
        res.status(500);
    }
}