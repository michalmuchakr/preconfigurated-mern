import createServer from './create-server';
import createConnection from './create-connection';

const app = createServer();
createConnection(app);
