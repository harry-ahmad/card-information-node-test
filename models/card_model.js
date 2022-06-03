const mongoose = require('mongoose');

const Cards = mongoose.model(
    'Cards',
    new mongoose.Schema({
        card_holder_name : {
            type : String,
            required : true
        },
        card_no : {
            type : String,
            required : true
        },
        cvv : {
            type : String,
            required : true
        },
        expiry_date : {
            type : String,
            required : true
        },
    })
)
exports.Cards = Cards;