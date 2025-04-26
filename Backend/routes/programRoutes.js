const express = require('express');
const router = express.Router();
const { createProgram, getPrograms } = require('../controllers/programController');

router.post('/', createProgram);
router.get('/', getPrograms);

module.exports = router;