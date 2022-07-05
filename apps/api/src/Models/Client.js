import mongoose from 'mongoose';

const ClientSchema = new mongoose.Schema(
  {
    id: String,
    clientId: String,
    clientSecret: String,
    grants: [String],
    redirectUris: [String],
  },
  {
    collection: 'clients',
  }
);

const Client = mongoose.model('client', ClientSchema);
module.exports = Client;
