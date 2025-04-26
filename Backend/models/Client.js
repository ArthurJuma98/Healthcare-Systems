const mongoose =require('mongoose');

const ClientSchema = new mongoose.Schema({
    name: String,
    age: Number,
    gender: String,
    phone: String,
    enrolledPrograms: [ {type: mongoose.Schema.Types.ObjectId, ref: 'program'} ]
});

module.exports = mongoose.model('Client', ClientSchema);