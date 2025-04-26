const mongoose = require('mongoose');

const ProgramSchema = new mongoose.Schema({
    name: {type: String, required: true},
    descripiton: String
});

module.exports = mongoose.model('Program', ProgramSchema);