const router = require('express').Router();
const controller = require('../controllers/main');

// Router for ID
router.get('/:id', controller.main);


module.exports = router;
