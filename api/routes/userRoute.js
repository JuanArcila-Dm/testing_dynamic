import express from 'express';
const router = express.Router();

import { getAllUsers,getUserId,newUser, updateUserController,deleteUser } from '../controller/userController.js';

router.get('/', getAllUsers); 
router.get('/user/:id', getUserId);
router.post('/new-user',newUser);
router.put('/usuarios/:id', updateUserController);
router.delete('/user-delete/:id',deleteUser);



export default router;
