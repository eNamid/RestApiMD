'use strict'
const mongoose = require('mongoose');

const Books = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    year: { type: String, required: true },
    author: { type: String, required: true },
    genre: { type: String, required: true }
});

const Book = mongoose.model("Book", Books);

module.exports = Book ;