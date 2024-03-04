const sequelize = require('../dp')
const {DataTypes} = require('sequelize')


const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING,},
    surname: {type: DataTypes.STRING,},
    avatar: {type: DataTypes.STRING,},
    email: {type: DataTypes.STRING, unique: true,},
    password: {type: DataTypes.STRING},
})
const Basket = sequelize.define('basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    userId: {type: DataTypes.INTEGER, allowNull: false},
})

const BasketCar = sequelize.define('basket_car', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Route = sequelize.define('route', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    startcity: { type: DataTypes.STRING, allowNull: false },
    endcity: { type: DataTypes.STRING, allowNull: false },
    distance: { type: DataTypes.FLOAT }, // Используем FLOAT для числовых значений
});

const Gruz = sequelize.define('gruz', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    date: { type: DataTypes.DATE, allowNull: false },
    // Добавляем связь с маршрутом (один ко многим)
    // Указываем атрибут foreignKey для связи с полем 'routeid' в модели Route
    routeid: { type: DataTypes.INTEGER, allowNull: false, references: { model: 'routes', key: 'id' } },
});
const Car = sequelize.define('car', { // Исправлено имя модели на 'car'
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
    price: { type: DataTypes.INTEGER, allowNull: false },
    rating: { type: DataTypes.INTEGER, defaultValue: 0 },
    img: { type: DataTypes.STRING, allowNull: false },
});
const CarInfo = sequelize.define('car_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
})

const CargoType = sequelize.define('cargoType', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
    description: { type: DataTypes.TEXT },
    // Дополнительные атрибуты для типов грузов: характеристики, требования и т.д.
});

const Driver = sequelize.define('driver', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    phoneNumber: { type: DataTypes.STRING, allowNull: false, unique: true },
    // Другие атрибуты водителя: возраст, контактные данные, лицензия и т.д.
});

const Type = sequelize.define('type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Brand = sequelize.define('brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Rating = sequelize.define('rating', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.INTEGER, allowNull: false},
})

const TypeBrand = sequelize.define('type_brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

User.hasOne(Basket); 
Basket.belongsTo(User);

User.hasMany(Rating)
Rating.belongsTo(User)

Basket.hasMany(BasketCar)
BasketCar.belongsTo(Basket)

Gruz.belongsTo(Route, { foreignKey: 'routeid' }); 
Route.hasMany(Gruz, { foreignKey: 'routeid' }); 
 // Маршрут имеет много грузов

Gruz.belongsTo(Car); // Груз связан с автомобилем
Car.hasMany(Gruz); // Автомобиль имеет много грузов

Gruz.belongsTo(Driver); // Груз связан с водителем
Driver.hasMany(Gruz); // Водитель имеет много грузо

Car.hasMany(BasketCar)
BasketCar.belongsTo(Car)

Car.hasMany(CarInfo, {as: 'info'});
CarInfo.belongsTo(Car)

Type.belongsToMany(Brand, {through: TypeBrand })
Brand.belongsToMany(Type, {through: TypeBrand })

Gruz.belongsToMany(CargoType, { through: 'GruzCargoType' }); // Грузы связаны с типами грузов
CargoType.belongsToMany(Gruz, { through: 'GruzCargoType' }); // Типы грузов связаны с грузами

Car.belongsTo(Type); // Автомобиль принадлежит к типу
Type.hasMany(Car); // Тип имеет много автомобилей

Car.belongsTo(Brand); // Автомобиль принадлежит к бренду
Brand.hasMany(Car); // Бренд имеет много автомобилей

// Экспортируем модели
module.exports = {
    User,
    Basket,
    BasketCar,
    Gruz,
    Route,
    Car,
    CargoType,
    Driver,
    Type,
    TypeBrand,
    Brand,
    Rating,
    CarInfo
};