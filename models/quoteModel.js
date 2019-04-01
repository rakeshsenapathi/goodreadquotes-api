const mongodb = require('mongoose');

var Schema = mongodb.Schema;

var quoteModel = new Schema({
    _id: mongodb.Schema.Types.ObjectId,
    tags: [String],
    likes: String,
    author: String,
    text: String
}, { collection: "quotes" })

module.exports = mongodb.model('quoteModel', quoteModel);