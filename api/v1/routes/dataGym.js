const router = require('express').Router();

const { getData  } = require('../controllers/dataGym');

router.get('/all', getData);
module.exports = router;