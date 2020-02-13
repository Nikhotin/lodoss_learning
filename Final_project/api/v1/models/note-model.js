var db = require("mongoose-sql");

db.connect({
    client: "pg",
    connection: {
      host: "127.0.0.1",
      user: "postgres",
      password: "q1q1",
      database: "notes",
      port: 5432
    }
});


var noteSchema = new db.Schema({
    user_id: Number,
    title: String,
    contenc: String
});

var Note = db.model('notes', noteSchema);

module.exports = Note;