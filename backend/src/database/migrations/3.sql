ALTER TABLE issue
    ADD COLUMN citizen_id uuid REFERENCES citizen(_id) ON DELETE CASCADE