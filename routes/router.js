const router = require('express').Router();

const upload = require('../config/multer');

// Services router
const servicesRouter = require('./services');

router.use('/', servicesRouter);

module.exports = router;