const Sequelize = require('sequelize');
const User = require('./user-model');

const sequelize = new Sequelize('notes', 'postgres', 'q1q1', {
  host: '127.0.0.1',
  dialect: 'postgres'
});

const Model = Sequelize.Model;
class Note extends Model {}
Note.init({
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  content: {
    type: Sequelize.TEXT
  }
}, {
  sequelize,
  timestamps: false,
  modelName: 'notes'
});

// Note.belongsTo(User, {foreignKeyConstraint: 'user_id'});
// User.hasMany(Note, {foreignKeyConstraint: 'user_id'});

module.exports = Note;