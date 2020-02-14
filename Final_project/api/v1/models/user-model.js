const Sequelize = require('sequelize');

const sequelize = new Sequelize('notes', 'postgres', 'q1q1', {
  host: '127.0.0.1',
  dialect: 'postgres'
});

const Model = Sequelize.Model;
class User extends Model {}
User.init({
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false
  },
  date_of_birth: {
    type: Sequelize.DATEONLY
  }
}, {
  sequelize,
  timestamps: false,
  modelName: 'user'
});

module.exports = User;