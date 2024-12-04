import { Router } from 'express';
import { validateIdNhanDienParam, validateNhanDienInput } from '../middleware/validationMiddleware.js';
import { createNhanDien, deleteNhanDien, getAllNhanDien, getNhanDien } from '../controllers/nhanDienController.js';
import upload from '../middleware/multerMiddleware.js';


const router = Router();

router.route('/').get(getAllNhanDien).post(upload.single('image'), validateNhanDienInput, createNhanDien);



router
    .route('/:id')
    .get(validateIdNhanDienParam, getNhanDien)
    .delete(validateIdNhanDienParam, deleteNhanDien);


export default router;