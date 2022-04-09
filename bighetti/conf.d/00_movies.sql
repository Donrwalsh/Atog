DROP TABLE movies;

CREATE TABLE IF NOT EXISTS movies (id INT NOT NULL AUTO_INCREMENT, 
            title VARCHAR(100), 
            rated VARCHAR(5),
            released VARCHAR(20),
            runtime VARCHAR(10),
            director VARCHAR(20),
            poster VARCHAR(200),
            imdbID VARCHAR(20),
            boxOffice VARCHAR(20),
            PRIMARY KEY ( id ) 
            ) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;  

INSERT IGNORE INTO movies VALUES (1, "A Few Good Men", "R", "11 Dec 1992", "138 min", "Rob Reiner", "https://m.media-amazon.com/images/M/MV5BMmRlZDQ1MmUtMzE2Yi00YTkxLTk1MGMtYmIyYWQwODcxYzRlXkEyXkFqcGdeQXVyNTI4MjkwNjA@._V1_SX300.jpg", "tt0104257", "$141,340,178");