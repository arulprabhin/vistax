import mongoose from 'mongoose';

const savedQuerySchema = new mongoose.Schema(
  {
    userId: mongoose.ObjectId,
    username: String,
    name: String,
    query: String,
    public: Boolean,
    createdOn: { type: Date, default: Date.now },
    updatedOn: { type: Date, default: Date.now },
  },
  {
    collection: 'saved_query',
  }
);
savedQuerySchema.pre(['save', 'updateOne', 'findOneAndUpdate'], function (next) {
  this.updatedOn = new Date();
  if (!this.createdOn) this.createdOn = new Date();
  next();
});

const SavedQuery = mongoose.model('savedQuery', savedQuerySchema);
module.exports = SavedQuery;
