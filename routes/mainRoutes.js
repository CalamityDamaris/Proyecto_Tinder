const express = require ('express');
const upload = require('../middleware/multer')
const router = express.Router();
const mainController = require ('../controllers/mainController')

router.get('/', mainController.home)
router.get('/acceder', mainController.acceder)
router.post('/registrarse', upload.array('avatar'), mainController.registrarse)

module.exports = router
