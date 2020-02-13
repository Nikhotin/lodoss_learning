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


var hashtagSchema = new db.Schema({
    note_id: Number,
    hashtag: String
});

var Hashtag = db.model('hashtags', hashtagSchema);

module.exports = Hashtag;