CREATE TABLE Users (
  id serial,
  name char(20) UNIQUE NOT NULL,
  phone char(20) UNIQUE,
  date_of_birth DATE,
  notes_count int DEFAULT 0,
  PRIMARY KEY (id)
);

CREATE TABLE Notes (
  id serial,
  user_id int NOT NULL,
  title char(50) NOT NULL,
  content char(280) NOT NULL,
  add_time TIMESTAMP(10) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  tags_count int DEFAULT 0,
  PRIMARY KEY (id)
);

CREATE TABLE Likes (
  id serial,
  user_id int NOT NULL,
  note_id int NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE Hashtags (
  id serial,
  note_id int NOT NULL,
  hashtag char(50) NOT NULL,
  PRIMARY KEY (id)
);

ALTER TABLE notes ADD FOREIGN KEY(user_id) REFERENCES users (id) ON DELETE CASCADE;
ALTER TABLE hashtags ADD FOREIGN KEY(note_id) REFERENCES notes (id) ON DELETE CASCADE;
ALTER TABLE likes ADD FOREIGN KEY(user_id) REFERENCES users (id) ON DELETE CASCADE;
ALTER TABLE likes ADD FOREIGN KEY(note_id) REFERENCES notes (id) ON DELETE CASCADE;

