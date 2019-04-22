const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataSchema = new Schema({
    name:String,
    phoneNumber: String,
    emailID: String,
    student: String
})

module.exports = mongoose.model('testDatabase',dataSchema)
