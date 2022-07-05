import mongoose from 'mongoose';

const TokenSchema = new mongoose.Schema(
  {
    accessToken: String,
    accessTokenExpiresAt: Date,
    refreshToken: String,
    refreshTokenExpiresAt: Date,
    client: Object,
    user: Object,
  },
  {
    collection: 'tokens',
  }
);

const Token = mongoose.model('token', TokenSchema);
module.exports = Token;
