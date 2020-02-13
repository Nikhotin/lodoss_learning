ALTER TABLE users ADD COLUMN notes_count int DEFAULT 0;

CREATE OR REPLACE FUNCTION updateNotesCount() RETURNS TRIGGER AS $$
DECLARE
	usrid int;
BEGIN
	IF 	TG_OP = 'INSERT' THEN
		usrid = NEW.user_id;
		UPDATE Users SET notes_count = notes_count + 1 WHERE id = usrid;
		RETURN NEW;
	ELSIF TG_OP = 'DELETE' THEN
		usrid = OLD.user_id;
		UPDATE Users SET notes_count = notes_count - 1 WHERE id = usrid;
		RETURN OLD;
	END IF;
END;
$$ LANGUAGE plpgsql;
	

CREATE TRIGGER update_notes_count
AFTER INSERT OR DELETE ON Notes FOR EACH ROW EXECUTE PROCEDURE updateNotesCount();