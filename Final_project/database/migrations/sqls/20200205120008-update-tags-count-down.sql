ALTER TABLE notes DROP COLUMN tags_count;
DROP TRIGGER update_tags_count ON Hashtags CASCADE;