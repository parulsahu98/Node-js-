const express = require('express'); 

const router  = express.Router(); 

const Controller = require('../Controller/test.Contoller.js'); 

router.get('/Create', Controller.InsertData);
router.get('/Select', Controller.SelectData);
router.get('/Delete', Controller.DeleteData);
router.get('/Update', Controller.UpdateData);

module.exports = router; 