import express from 'express';
import { getAllUsers, getUserById, createUser, updateUser, deleteUser  } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.get('/', getAllUsers);
userRouter.get('/:id', getUserById);
userRouter.post('/', createUser);
userRouter.put('/:id', updateUser);
userRouter.delete('/:id', deleteUser);

export default userRouter;

