ALTER TABLE notes ADD COLUMN tags_count int DEFAULT 0;

CREATE OR REPLACE FUNCTION updateTagsCount() RETURNS TRIGGER AS $$
DECLARE
	ntid int;
BEGIN
	IF 	TG_OP = 'INSERT' THEN
		ntid = NEW.note_id;
		UPDATE Notes SET tags_count = tags_count + 1 WHERE id = ntid;
		RETURN NEW;
	ELSIF TG_OP = 'DELETE' THEN
		ntid = OLD.note_id;
		UPDATE Notes SET tags_count = tags_count - 1 WHERE id = ntid;
		RETURN OLD;
	END IF;
END;
$$ LANGUAGE plpgsql;
	

CREATE TRIGGER update_tags_count
AFTER INSERT OR DELETE ON Hashtags FOR EACH ROW EXECUTE PROCEDURE updateTagsCount();