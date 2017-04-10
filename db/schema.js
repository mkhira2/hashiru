const mongoose = require('mongoose');

// ----------------------
// USERS
// ----------------------
const usersSchema = new mongoose.Schema({
  // required for authentication: DO NOT TOUCH Or You May Get Punched
  email:       { type: String, required: true },
  password:    { type: String, required: true },
  // x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x
  
   // example of optional fields
  name:        { type: String },
  createdAt:   { type: Date, default: Date.now },
  expPoints:   { type: Number, default: 0 },
  level:       { type: Number, default: 0 },
  fiveKBadge:  { type: Boolean, default: false },
  tenKBadge:   { type: Boolean, default: false },
  tenMileBadge:{ type: Boolean, default: false },
  halfMarathonBadge: { type: Boolean, default: false},
  marathonBadge: { type: Boolean, default: false},
  twentyFiveMileBadge: { type: Boolean, default: false},
  fiftyMileBadge: { type: Boolean, default: false},
  oneHundredMileBadge: { type: Boolean, default: false},
  oneHundredFiftyMileBadge: { type: Boolean, default: false},
  twoHundredMileBadge: { type: Boolean, default: false}
}) 

const runSchema = new mongoose.Schema({
	run:         { type: Number, required: true},
  createdAt:   { type: Date, default: Date.now },
  user_id:     { type: String, required: true}
})

// const badgeSchema = new mongoose.Schema({
//   name:        { type: String },
//   icon:        { type: String },
//   criteria:    { type: Number }
// })

module.exports = {
  User: mongoose.model('User', usersSchema),
  Run: mongoose.model('Run', runSchema),
  // Badge: mongoose.model('Badge', badgeSchema)

}
