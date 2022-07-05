import mongoose from 'mongoose';

const queryHistorySchema = new mongoose.Schema(
  {
    userId: mongoose.ObjectId,
    username: String,
    list: [
      {
        type: { type: String, default: 'HUNT_ACTIVITY' },
        query: String,
        created_on: { type: Date, default: Date.now },
      },
    ],
    updated_on: { type: Date, default: Date.now },
  },
  {
    collection: 'query_history',
  }
);
queryHistorySchema.pre(['save', 'updateOne', 'findOneAndUpdate'], function (next) {
  this.updated_on = new Date();
  next();
});

const QueryHistory = mongoose.model('queryHistory', queryHistorySchema);
module.exports = QueryHistory;
