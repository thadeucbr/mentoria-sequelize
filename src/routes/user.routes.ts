import { Router } from 'express';
import UserController from '../controllers/UserController';

const userRoutes = Router();

userRoutes.route('/')
  .post(UserController.createUser)
  .get(UserController.listUsers);

export default userRoutes;