import { Router } from 'express';
import attendantsRouter from './attentants.routes';

const routes = Router();

routes.use('/attendants', attendantsRouter);

export default routes;
