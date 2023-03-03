const express = require('express'); 

const router  = express.Router(); 

const teaController = require('../Controller/test.Contoller.js'); 

router.get('/Create', teaController.InsertData);
router.get('/Select', teaController.SelectData);
router.get('/Delete', teaController.DeleteData);
router.get('/Update', teaController.UpdateData);

module.exports = router; 