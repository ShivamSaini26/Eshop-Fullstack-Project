const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'shivam26', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
