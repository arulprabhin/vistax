import mongoose from 'mongoose';

module.exports = (callbackFn) => {
  const connectMongo = () =>
    mongoose
      .connect(process.env.MONGODB_URI, {
        dbName: process.env.DB_NAME,
        user: process.env.DB_USER,
        pass: process.env.DB_PASS,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      })
      .then(() => {
        if (callbackFn) callbackFn('SUCCESS');
        console.log('Mongodb connected....');
      })
      .catch((err) => {
        console.log(err.message);
        if (callbackFn) callbackFn('FAILED', err.message);
      });

  mongoose.connection.on('connected', () => {
    if (callbackFn) callbackFn('CONNECTED');
    console.log('Mongoose connected to db...');
  });

  mongoose.connection.on('error', (err) => {
    if (callbackFn) callbackFn('ERROR', err.message);
    console.log(err.message);
  });

  mongoose.connection.on('disconnected', () => {
    if (callbackFn) callbackFn('DISCONNECTED');
    console.log('Mongoose connection is disconnected...');
  });

  process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      if (callbackFn) callbackFn('TERMINATED');
      console.log('Mongoose connection is disconnected due to app termination...');
      process.exit(0);
    });
  });

  connectMongo();
};
