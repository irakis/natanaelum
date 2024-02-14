
const express = require('express');
const checkRecaptcha = require('../controllers/checkRecaptcha.controller');
const router = express.Router();;

router.post('/clinic/select_clinic/post',  checkRecaptcha);

module.exports = router;