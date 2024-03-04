const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User, Basket} = require('../models/models')

const generateJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}


class UserController {
    async registration(req, res, next) {
        try {
            const {name,surname, avatar, email, password } = req.body;
            if (!email || !password) {
                return next(ApiError.badRequest('Некорректный email или password'));
            }
            let user = await User.findOne({ where: { email } });
            if (user) {
                return next(ApiError.badRequest('Пользователь с таким email уже существует'));
            }
            const hashPassword = await bcrypt.hash(password, 5);
            user = await User.create({ name,surname, avatar, email, password: hashPassword });
            if (!user) {
                return next(ApiError.internal('Ошибка создания пользователя'));
            }
            const basket = await Basket.create({ userId: user.id });
            const token = generateJwt(user.id, user.email, user.name);
            return res.json({token});
        } catch (error) {
            console.error('Ошибка при регистрации пользователя:', error);
            res.status(500).json({ error: 'Ошибка при регистрации пользователя' });
        }
    }
    
    async login(req, res, next) {
        const {email, password} = req.body
        const user = await User.findOne({where: {email}})
        if (!user) {
            return next(ApiError.internal('Пользователь не найден'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.internal('Указан неверный пароль'))
        }
        const token = generateJwt(user.id, user.email, user.name)
        return res.json({token})
    }

    async check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.email, req.user.name)
        return res.json({token})
    }
    async deleteAllUsers(req, res) {
        try {
            await User.destroy({
                where: {},
                truncate: false // Используем truncate: false
            });
    
            res.json({ message: 'Все пользователи успешно удалены' });
        } catch (error) {
            console.error('Ошибка при удалении пользователей:', error);
            res.status(500).json({ error: 'Ошибка удаления пользователей' });
        }
    }    
}

module.exports = new UserController()