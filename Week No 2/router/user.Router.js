const express = require('express'); 
const multer = require('multer');
const router  = express.Router(); 

const Controller = require('../Controller/user.Controller.js'); 
const upload = multer({dest: 'public/images'});
router.get('/', Controller.Register);
router.get('/Login', Controller.Login);
// router.get('/Logout', Controller.DeleteData);
// router.get('/Profile',Controller.Profile);
// router.put('/Update', Controller.UpdateData);
router.post('/Save',upload.single('Image'), Controller.RegisterPost);
router.post('/LoginPost', Controller.LoginPost);
module.exports = router; 