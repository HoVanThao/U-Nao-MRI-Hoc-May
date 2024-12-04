import { Router } from 'express';
import upload from '../middleware/multerMiddleware.js';
import { getCurrentUser, updateUser, } from '../controllers/userController.js';
import { authorizePermissions, checkForTestUser } from '../middleware/authMiddleware.js';
import { validateUpdateUserInput } from '../middleware/validationMiddleware.js';

const router = Router();

router.get('/current-user', getCurrentUser);

router.patch(
    '/update-user',
    checkForTestUser,
    upload.single('avatar'),
    validateUpdateUserInput,
    updateUser
);

export default router;