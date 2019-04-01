//const _quotes = require('../assets/quotes.json');
const mongoose = require('mongoose');
const quoteModel = require('../models/quoteModel.js');

exports.getQuotes = function (request, response) {
    // const filter_quotes = _quotes.filter(val => val.text.length < 50);
    quoteModel.find({})
        .exec((err, resultSet) => {
            resultSet = resultSet.filter(result => result.text.length < 100)
            response.send(resultSet);
        });
}

