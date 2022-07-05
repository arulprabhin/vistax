import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    //_id: mongoose.ObjectId,
    name: String,
    username: String,
    password: String,
    email: String,
    role: String,
    status: String,
    description: String,
    loginAttempt: Number,
    resetIdentifier: String,
    photo: String,
    firstLogin: Number,
    darktheme: Number,
    expiretime: Number,
    expiry_date: Number,
    createdOn: { type: Date, default: Date.now },
    updatedOn: { type: Date, default: Date.now },
  },
  {
    collection: 'users',
  }
);
UserSchema.pre(['save', 'updateOne', 'findOneAndUpdate'], function (next) {
  this.updatedOn = new Date();
  if (!this.createdOn) this.createdOn = new Date();
  next();
});

const User = mongoose.model('user', UserSchema);
module.exports = User;
