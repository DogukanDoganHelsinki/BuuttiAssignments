CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "full_name" varchar NOT NULL,
  "email" varchar UNIQUE NOT NULL,
  "created_at" timestamp NOT NULL
);

CREATE TABLE "genres" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar UNIQUE NOT NULL
);

CREATE TABLE "languages" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar UNIQUE NOT NULL
);

CREATE TABLE "books" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar NOT NULL,
  "release_year" int NOT NULL,
  "genre_id" int NOT NULL,
  "language_id" int NOT NULL
);

CREATE TABLE "volumes" (
  "id" SERIAL PRIMARY KEY,
  "book_id" int NOT NULL
);

CREATE TABLE "borrows" (
  "id" SERIAL PRIMARY KEY,
  "volume_id" int NOT NULL,
  "user_id" int NOT NULL,
  "borrowed_at" timestamp NOT NULL,
  "due_date" timestamp NOT NULL,
  "returned_at" timestamp
);

ALTER TABLE "books" ADD FOREIGN KEY ("genre_id") REFERENCES "genres" ("id");

ALTER TABLE "books" ADD FOREIGN KEY ("language_id") REFERENCES "languages" ("id");

ALTER TABLE "volumes" ADD FOREIGN KEY ("book_id") REFERENCES "books" ("id");

ALTER TABLE "borrows" ADD FOREIGN KEY ("volume_id") REFERENCES "volumes" ("id");

ALTER TABLE "borrows" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");


INSERT INTO users (full_name, email, created_at)
VALUES 
    ('Teppo Testaaja', 'teppo.testaaja@buutti.com', NOW()),
    ('Taija Testaaja', 'taija.testaaja@buutti.com', NOW()),
    ('Outi Ohjelmoija', 'outi.ohjelmoija@buutti.com', NOW()),
    ('Olli Ohjelmoija', 'olli.ohjelmoija@buutti.com', NOW());

INSERT INTO genres (name)
VALUES 
    ('Scifi'),
    ('Fantasy'),
    ('Comic book'),
    ('Horror'),
    ('Drama');

INSERT INTO languages (name)
VALUES
    ('Finnish'),
    ('English'),
    ('Swedish');

INSERT INTO books (name, release_year, genre_id, language_id)
VALUES
    ('Taru Sormusten Herrasta', 1954, 2, 1),
    ('Silmarillion', 1977, 2, 2),
    ('The Hitchhikers Guide to the Galaxy', 1979, 1, 2);

INSERT INTO volumes (book_id)
    VALUES 
        (1),
        (1),
        (1),
        (1),
        (1),
        (1),
        (2),
        (2),
        (2),
        (3),
        (3);

INSERT INTO borrows (volume_id, user_id, borrowed_at, due_date, returned_at)
VALUES
    (1, 1, current_timestamp - (30 * interval '1 day'), current_timestamp, null),
    (2, 2, current_timestamp - (35 * interval '1 day'), current_timestamp - (5 * interval '1 day'), null),
    (7, 1, current_timestamp - (40 * interval '1 day'), current_timestamp - (10 * interval '1 day'), current_timestamp - (15 * interval '1 day'));