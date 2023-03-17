const Model = require('../component/Model');
const Book = require('../component/models/Books');

module.exports = async (req, res) => {
    const book = new Book(req.body);
    book.title = req.body.title;
    book.author = req.body.author;
    book.genre = req.body.genre;   
    book.dbook = req.body.dbook;
    
    try {
        book.save();
        res.sendStatus(200);
    }
    catch(err){
        console.log(err);
        res.sendStatus(500);
    }
}