import { Router } from 'express';
import UserController from '../controllers/user.controller.js';
import verifyToken from '../middlewares/auth.middleware.js';
import authorizeRoles from '../middlewares/role.middleware.js';

const route = Router();
route.get('/user', verifyToken, authorizeRoles('admin', 'manager', 'user'),  UserController.user);
route.get('/manager', verifyToken, authorizeRoles('admin', 'manager'), UserController.manager);
route.get('/admin', verifyToken, authorizeRoles('admin'), UserController.admin);

export default route;
