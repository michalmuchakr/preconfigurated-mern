import express from 'express';
import applyMiddleware from './config/applyMiddleware';
import applyRouters from './config/applyRouters';

const createServer = () => {
  const app = express();

  applyMiddleware(app);

  applyRouters(app);

  return app;
};

export default createServer;
