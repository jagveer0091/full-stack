const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataSchema = new Schema({
    name:String,
    rollno: String
})

module.exports = mongoose.model('testDatabase',dataSchema)
