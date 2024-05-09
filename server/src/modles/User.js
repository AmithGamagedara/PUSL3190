const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  userType: { type: String, required: true },
  firstName: String,
  lastName: String,
  associationName: String,
  licenseId: String,
  email: { type: String, required: true, unique: true },
  mobileNumber: String,
  password: { type: String, required: true }
});

userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 8);
  }
  next(); 
});

module.exports = mongoose.model('User', userSchema);
