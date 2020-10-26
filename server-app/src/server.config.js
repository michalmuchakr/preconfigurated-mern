import dotenv from 'dotenv';
import path from 'path';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config({path: path.resolve(__dirname, '.env')});
}

export default {
  express: {
    port: process.env.PORT || 9000,
  },
  mongoose: {
    uri: process.env.MONGODB_URI || 'mongodb://localhost/mern',
  },
};
