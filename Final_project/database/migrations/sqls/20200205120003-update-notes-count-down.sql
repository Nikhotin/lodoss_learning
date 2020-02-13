ALTER TABLE users DROP COLUMN notes_count;
DROP TRIGGER update_notes_count ON Notes CASCADE;