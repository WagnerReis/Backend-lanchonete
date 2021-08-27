import { Router } from 'express';
import attendantsRouter from './attendants.routes';
import requestedsRouter from './requested.routes';

const routes = Router();

routes.use('/attendants', attendantsRouter);
routes.use('/requesteds', requestedsRouter);

export default routes;
