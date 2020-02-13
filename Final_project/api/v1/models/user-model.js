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


var userSchema = new db.Schema({
    name: String,
    phone: String,
    date_of_bith: Date
});

var User = db.model('users', userSchema);

module.exports = User;