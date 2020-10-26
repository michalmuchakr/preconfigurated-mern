import cors from './cors';
import bodyParser from 'body-parser';

const applyMiddleware = (app) => {
  app.use(bodyParser.json());
  app.use(
    bodyParser.urlencoded({
      extended: true,
    }),
  );
  app.use(cors);
};

export default applyMiddleware;
