import sequelize from 'sequelize';

const db = new sequelize('crudjs', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

export default db;