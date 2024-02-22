const Router = require('express');
const userController = require('../controllers/userController');
const router = new Router();
const authMiddleware = require ('../middleware/authMiddleware')

router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.get('/auth', authMiddleware, userController.check);

// Добавляем обработчик для DELETE запроса на /api/user
router.delete('/', userController.deleteAllUsers);

module.exports = router;
