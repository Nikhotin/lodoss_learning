const Sequelize = require('sequelize');
const Note = require('./note-model');

const sequelize = new Sequelize('notes', 'postgres', 'q1q1', {
  host: '127.0.0.1',
  dialect: 'postgres'
});

const Model = Sequelize.Model;
class Hashtag extends Model {}
Hashtag.init({
  note_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  hashtag: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  sequelize,
  timestamps: false,
  modelName: 'hashtag'
});

// Hashtag.belongsTo(Note, { as: 'Note'});
// Note.hasMany(Hashtag, { as: 'Note'});

module.exports = Hashtag;