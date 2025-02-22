const express = require('express');
const router = express.Router();
const{InfoController, InforController} = require('../../controllers');

router.get('/info',InforController.info);

module.exports = router;