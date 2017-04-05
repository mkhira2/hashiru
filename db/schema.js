const mongoose = require('mongoose');

// ----------------------
// USERS
// ----------------------
const usersSchema = new mongoose.Schema({
  // required for authentication: DO NOT TOUCH Or You May Get Punched
  email:     { type: String, required: true },
  password:  { type: String, required: true },
  // x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x
  
   // example of optional fields
  name:      { type: String },
  createdAt: { type: Date, default: Date.now }

})

const runSchema = new mongoose.Schema({
	run: { type: Number, required: true},
  user_id: { type: String, required: true}

})

module.exports = {
  User: mongoose.model('User', usersSchema),
  Run: mongoose.model('Run', runSchema)
}
