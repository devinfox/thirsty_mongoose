const mongoose = require('mongoose');
const Schema = mongoose.Schema
const Beer = require('./Beer');

var barSchema = new Schema ({
    name: String,
    location: String,
    beers: [{type: mongoose.Schema.Types.objectId, ref: "Beer"}]
})

module.exports = barSchema;