import express from 'express';
import { createUser, deleteUser, getUser, updateUser } from '../controllers/ProductControllers.js';

const router = express.Router();

router.post('/', createUser); // This route corresponds to 'POST /api/users/'
router.get('/:id', getUser); // This route corresponds to 'GET /api/users/:id'
router.put('/', updateUser); // This route corresponds to 'PUT /api/users'
router.delete('/:id', deleteUser); // This route corresponds to 'DELETE /api/users/:id'

export default router;