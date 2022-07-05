import mongoose from 'mongoose';

const SyslogSchema = new mongoose.Schema(
  {
    name: String,
    perincident: String,
    perpolicy: String,
    percases: String,
    pertests: String,
    score: Number,
  },
  {
    collection: 'syslog',
  }
);

const Syslog = mongoose.model('Syslog', SyslogSchema);
module.exports = Syslog;
