'use strict'
const mongoose = require('mongoose');

const Books = new mongoose.Schema({
    __id: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true,
    },
    author: { 
        type: String, 
        required: true 
    },
    genre: { 
        type: String, 
        required: true 
    },
    dbook: {
        type: String,
        required: true
    }
});

const Book = mongoose.model("Book", Books);

module.exports = Book ;