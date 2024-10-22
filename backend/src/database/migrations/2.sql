
CREATE TABLE issue (
    _id uuid DEFAULT uuid_generate_v4() ,
    _subject VARCHAR(60) NOT NULL,
    _description VARCHAR(200) NOT NULL,
    PRIMARY KEY (_id)
)