let express = require('express');
let router = express.Router();
let loginController = require('../controllers/loginController');

router.get('/login', loginController.login);

router.post('/login/attempt', loginController.loginAttempt);

// router.get('/login/success', loginController.loginSuccess);

module.exports = router;