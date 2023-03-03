const express = require('express'); 

const router  = express.Router(); 

const teaController = require('../Controller/test.Contoller.js'); 

router.get('/createDB', teaController.createDatabase); 
router.get('/CreateTable', teaController.createTable); 
router.get('/InsertData', teaController.InsertData);
router.get('/SelectData', teaController.SelectData);
router.get('/DeleteData', teaController.DeleteData);
router.get('/UpdateData', teaController.UpdateData);
router.get('/DropTable', teaController.DropTable);
module.exports = router; 