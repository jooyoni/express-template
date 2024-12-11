import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('stock', 'jooyeon', '1234', {
  host: 'localhost',
  dialect: 'postgres',
  port: 5432,
  logging: false,
});

export default sequelize;
