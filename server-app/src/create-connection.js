import mongoose from 'mongoose';
import serverConfig from './server.config';

const createConnection = (app) => {
  const db = mongoose.connection;

  mongoose.connect(serverConfig.mongoose.uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });

  db.on('error', () => {
    console.error.bind(console, 'connection error:');
  });

  db.once('open', () => {
    app.listen(serverConfig.express.port, () => {
      console.log(`Express listen at port: ${serverConfig.express.port}`);
    });
  });
};

export default createConnection;
