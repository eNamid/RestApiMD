const Model = require('../component/Model');
const Book = require('../component/models/Books');

module.exports = async (req, res) => {
    const book = new Book(req.body);
    book.title = req.body.title;
    book.year = req.body.year;
    book.author = req.body.author;
    book.genre = req.body.genre;   
     
    try {
        book.save();
        res.json(book);
    }
    catch(err){
        console.log(err);
        res.status(500);
    }
}