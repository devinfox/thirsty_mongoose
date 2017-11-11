const mongoose = require('mongoose');
const Schema = mongoose.Schema
const Bar = require('./Bar');

var  commentSchema = new Schema ({
    content: String
}),

var beerSchema = new Schema ({
   name: String,
   style: String,
   beers: [{type: mongoose.Schema.Types.objectId, ref: "Bar"}],
   comments: [commentSchema]
},
    {
    timestamps: true
    }
);

module.exports = beerSchema;