INSERT INTO users (name, phone, date_of_birth) 
VALUES ('Fake', 89099099090, CAST('2007-03-20' as date));
INSERT INTO users (name, phone, date_of_birth) 
VALUES ('Next', 89887742777, CAST('1993-02-25' as date));
INSERT INTO users (name, phone, date_of_birth) 
VALUES ('Vova', 89199299292, CAST('2003-04-20' as date));
INSERT INTO users (name, phone, date_of_birth) 
VALUES ('Viktor', 89008007060, CAST('2001-02-10' as date));
INSERT INTO users (name, phone, date_of_birth) 
VALUES ('Sasha', 89999999999, CAST('2004-03-15' as date));

INSERT INTO notes (user_id, title, content, add_time) 
VALUES (1, 'Великий Гетсби', 'Какая-то заметка о книге', CURRENT_TIMESTAMP);
INSERT INTO notes (user_id, title, content, add_time) 
VALUES (1, 'Эль класико', 'Какая-то заметка о матче Барсы и Реала', CURRENT_TIMESTAMP);
INSERT INTO notes (user_id, title, content, add_time) 
VALUES (2, 'Мартин Иден', 'Какая-то заметка о книге', CURRENT_TIMESTAMP);
INSERT INTO notes (user_id, title, content, add_time) 
VALUES (2, 'Поездка в мск', 'Какая-то заметка о путешествии', CURRENT_TIMESTAMP);
INSERT INTO notes (user_id, title, content, add_time) 
VALUES (3, 'Портрет Дориана Грея', 'Какая-то заметка о книге', CURRENT_TIMESTAMP);
INSERT INTO notes (user_id, title, content, add_time) 
VALUES (3, 'Поездка в Италию', 'Какая-то заметка о путешествии', CURRENT_TIMESTAMP);
INSERT INTO notes (user_id, title, content, add_time) 
VALUES (4, 'Маленький принц', 'Какая-то заметка о книге', CURRENT_TIMESTAMP);
INSERT INTO notes (user_id, title, content, add_time) 
VALUES (4, 'Новый музыкальный альбом', 'Какая-то заметка о музыке', CURRENT_TIMESTAMP);
INSERT INTO notes (user_id, title, content, add_time) 
VALUES (5, 'Хоббит', 'Какая-то заметка о книге', CURRENT_TIMESTAMP);

INSERT INTO hashtags (note_id, hashtag) 
VALUES (12, 'Книги');
INSERT INTO hashtags (note_id, hashtag) 
VALUES (13, 'Футбол');
INSERT INTO hashtags (note_id, hashtag) 
VALUES (14, 'Книги');
INSERT INTO hashtags (note_id, hashtag) 
VALUES (15, 'Путешествия');
INSERT INTO hashtags (note_id, hashtag) 
VALUES (16, 'Книги');
INSERT INTO hashtags (note_id, hashtag) 
VALUES (17, 'Путешествия');
INSERT INTO hashtags (note_id, hashtag) 
VALUES (18, 'Книги');
INSERT INTO hashtags (note_id, hashtag) 
VALUES (19, 'Музыка');
INSERT INTO hashtags (note_id, hashtag) 
VALUES (20, 'Книги');


UPDATE users
SET password = 't5t5'
WHERE id = 16;