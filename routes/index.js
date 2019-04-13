var express = require('express');
var router = express.Router();
var quotes = require('../controllers/quotes');
const quoteModel = require('../models/quoteModel.js');
const mongoose = require('mongoose');

/* GET home page. */
router.get('/', (req, res) => {
    res.json({ status: "Working" })
});

/* GET All Quotes */
router.get('/getQuotes', quotes.getQuotes);

router.get('/getPopularQuotes', quotes.getPopularQuotes);

router.get('/author', quotes.getQuotesByAuthor);

router.post('/insertQuote', (req, res) => {
    const newQuote = new quoteModel({
        _id: new mongoose.Types.ObjectId(),
        tags: ["Inspirational", "Motivational"],
        likes: "2500likes",
        author: "SriKanthAddala",
        text: "Kajji Kayalu Thintaventra"
    });
    newQuote
        .save()
        .then(res.status(200).json({ status: "Inserted Successfully" }))
        .catch(res.status(500).json({ status: "Failed operation : Insertion" }));
})



module.exports = router;
