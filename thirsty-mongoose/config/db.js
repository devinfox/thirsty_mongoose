const mongoose = require('mongoose');
mongoose.connect('mongodb://localhostt/thirsty-mongoose');

const db = mongoose.connection;
 
db.once('open', () => {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});

db.on('error', (err) => {
    console.error(`Databse error: \n${err}`)
})