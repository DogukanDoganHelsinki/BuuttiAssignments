1) Postpone the due date of the borrow with an id of 1 by two days in the borrows table
```
UPDATE borrows SET due_date = due_date + INTERVAL '1 day' WHERE id = 1;
```
2) Add a couple of new books to the books table
```
INSERT INTO books (name, release_year, genre_id, language_id) 
VALUES ('foo', 1999, 1, 2), ('bar', 1950, 2, 1);
```
*This works because the database auto-generates the ID*