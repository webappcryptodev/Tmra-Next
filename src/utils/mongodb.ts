import * as mongoose from 'mongoose';

export async function withMongo<T>(func: () => Promise<T>): Promise<T> {
  if (!process.env.MONGODB_URI || !process.env.MONGODB_DATABASE) {
    throw new Error('MONGODB_URI and MONGODB_DATABASE is required');
  }
  // console.debug(`Connecting MongoDB ${process.env.MONGODB_DATABASE}...`);
  await mongoose.connect(process.env.MONGODB_URI, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    dbName: process.env.MONGODB_DATABASE,
  });
  try {
    // console.debug('MongoDB connected');
    return await func();
  } finally {
    // mongoose.disconnect();
  }
}
