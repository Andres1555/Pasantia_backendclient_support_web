import {sequelize} from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite', 
  logging: false
});

export async function initDatabase() {
  await sequelize.sync({ alter: true });
  console.log('Base de datos sincronizada con Sequelize');
}

export default sequelize;
