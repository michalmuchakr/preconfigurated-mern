import pingPongRouter from '../routes/ping-pong-router';

const applyRouters = (app) => {
  app.use('/api/ping', pingPongRouter);
};

export default applyRouters;
