import express from 'express';
import multer from 'multer';
import { isVerified } from '../middle/authenticate.js'

import { Register, Login, DeleteData, UpdateData, Profile, RegisterPost, LoginPost } from '../Controller/user.Controller.js';
const router = express.Router();
const upload = multer({ dest: 'public/images' });
router.get('/', Register);
router.get('/Login', Login);
router.get('/Logout', DeleteData);

router.get('/Profile', isVerified,Profile);
router.post('/Update', upload.single('Image'), UpdateData);
router.post('/Save', upload.single('Image'), RegisterPost);
router.post('/LoginPost', LoginPost);
export default router;