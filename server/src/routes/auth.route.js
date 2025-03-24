import { Router } from 'express';
import AuthController from '../controllers/auth.controller.js';

const route = Router();
route.post('/register', AuthController.register);
route.post('/login', AuthController.login);

export default route;
