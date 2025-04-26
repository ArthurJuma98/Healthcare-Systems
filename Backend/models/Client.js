const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
  phone: String,
  enrolledPrograms: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Program' }]
});

module.exports = mongoose.model('Client', clientSchema);