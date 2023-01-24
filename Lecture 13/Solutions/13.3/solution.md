1. all columns of borrows that are borrowed before 2020-08-15
    ```SELECT * FROM borrows WHERE borrowed_at <= '2022-07-20';```
2. all columns of borrows that are returned
    ```SELECT * FROM borrows WHERE returned_at IS NOT null;```
3.  columns user.full_name and borrows.borrowed_at of the user with an id of 1
    ```
    SELECT users.full_name, borrows.borrowed_at 
    FROM users JOIN borrows AT users.id = borrowed.user_id 
    WHERE user.id = 1
    ```
4. columns book.name, book.release_year and language.name of all books that are released after 1960
    ```
    SELECT books.name, books.release_year, languages.name 
    FROM books LEFT JOIN languages AT books.language_id = languages.id
    WHERE books.release_year > 1960;
    ```