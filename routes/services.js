const router = require("express").Router();
const serviceController = require('../controllers/serviceController');
const upload = require('../config/multer'); // Certifique-se de que o caminho está correto

router.route('/services').post(upload.single('image'), (req, res) => serviceController.create(req, res));

router.route('/services').get((req, res) => serviceController.getAll(req, res));

router.route('/services/:id').get((req, res) => serviceController.get(req, res));

router.route('/services/:id').delete((req, res) => serviceController.delete(req, res));

router.route('/services/:id').put(upload.single('image'), (req, res) => serviceController.update(req, res));

module.exports = router;