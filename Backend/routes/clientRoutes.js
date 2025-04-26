const express = require('express');
const router = express.Router();
const {
  createClient,
  getClients,
  getClientProfile,
  enrollClient
} = require('../controllers/clientController');

router.post('/', createClient);
router.get('/', getClients);
router.get('/:id', getClientProfile);
router.post('/:id/enroll', enrollClient);

module.exports = router;