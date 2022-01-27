import express from 'express';
import {createUser, getUsers, getUserDetails, deleteUser, updateUser } from '../controllers/users.js'

const router = express.Router();


// All routes in here are starting from /users
router.get('/', getUsers);
router.post('/', createUser);
router.get('/:id',getUserDetails);
router.delete('/:id', deleteUser);
router.patch('/:id',updateUser);

export default router; 