import { Router } from 'express';
import AuthRoutes from './auth.route.js';

const routes = Router();

routes.use('/api', AuthRoutes);

export default routes;
