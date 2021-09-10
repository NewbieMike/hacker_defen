const mongoose = require('mongoose');

const voterSchema = new mongoose.Schema({
  usersIP: { type: String, required: true},
  usersVotes: { type: Array, required: true},
});

module.exports = mongoose.model('Voter', voterSchema);
