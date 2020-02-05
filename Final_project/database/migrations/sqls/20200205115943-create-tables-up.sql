CREATE TABLE Users (
  id serial,
  user_name char(20) UNIQUE NOT NULL,
  user_phone char(20) UNIQUE,
  date_of_birth DATE,
  notes_count int DEFAULT 0,
  PRIMARY KEY (id)
);

CREATE TABLE Notes (
  id serial,
  user_id int NOT NULL,
  title char(50) NOT NULL,
  content char(280) NOT NULL,
  add_time TIMESTAMP(10) NOT NULL,
  tags_count int DEFAULT 0,
  PRIMARY KEY (id),
  CONSTRAINT FK_UsersNotes FOREIGN KEY (user_id) REFERENCES Users(id)
);

--REFERENCES Users(user_id) ON UPDATE CASCADE ON DELETE CASCADE

CREATE TABLE Likes (
  id serial,
  user_id int NOT NULL,
  note_id int NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT FK_UsersLikes FOREIGN KEY (user_id) REFERENCES Users(id),
  CONSTRAINT FK_NotesLikes FOREIGN KEY (note_id) REFERENCES Notes(id)
);

--REFERENCES Users(user_id) ON UPDATE CASCADE ON DELETE CASCADE,
--REFERENCES Notes(note_id) ON UPDATE CASCADE ON DELETE CASCADE

CREATE TABLE Hashtags (
  id serial,
  note_id int NOT NULL,
  hashtag char(50) NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT FK_NotesHashtags FOREIGN KEY (note_id) REFERENCES Notes(id)
);

--REFERENCES Notes(note_id) ON UPDATE CASCADE ON DELETE CASCADE
