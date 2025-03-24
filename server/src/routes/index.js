import { Router } from 'express';
import AuthRoutes from './auth.route.js';
import UserRoutes from './user.route.js';

const routes = Router();

routes.use('/api', AuthRoutes);
routes.use('/api/users', UserRoutes);

export default routes;
