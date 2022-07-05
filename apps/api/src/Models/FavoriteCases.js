import mongoose from 'mongoose';

const favoriteCaseSchema = new mongoose.Schema(
  {
    userId: mongoose.ObjectId,
    username: String,
    cases: [
      {
        uuid: String,
        createdOn: { type: Date, default: Date.now },
        public: {type: Boolean, default: false}
      },
    ],
  },
  {
    collection: 'favorite_case',
  }
);
favoriteCaseSchema.pre(['save'], function (next) {
  if (!this.createdOn) this.createdOn = new Date();
  next();
});

const FavoriteCase = mongoose.model('selectCase', favoriteCaseSchema);
module.exports = FavoriteCase;
