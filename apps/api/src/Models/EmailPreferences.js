import mongoose from 'mongoose';

const EmailSchema = new mongoose.Schema(
  {
    //_id: mongoose.ObjectId,
    email: String,
    automaticMailing: Boolean,
    automatic: Number,
    perIncident: Boolean,
    perincident: String,
    perPolicy: Boolean,
    perpolicy: String,
    perCases: Boolean,
    percases: String,
    perTests: Boolean,
    pertests: String,
    score: Number,
    createdOn: { type: Date, default: Date.now },
    updatedOn: { type: Date, default: Date.now },
  },
  {
    collection: 'email',
  }
);
EmailSchema.pre(['save', 'updateOne', 'findOneAndUpdate'], function (next) {
  this.updatedOn = new Date();
  if (!this.createdOn) this.createdOn = new Date();
  next();
});

const EmailPreferences = mongoose.model('email', EmailSchema);
module.exports = EmailPreferences;
