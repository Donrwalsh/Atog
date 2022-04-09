DROP TABLE movies;

CREATE TABLE IF NOT EXISTS movies (id INT NOT NULL AUTO_INCREMENT, 
            title VARCHAR(100), 
            PRIMARY KEY ( id ) 
            ) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;  

INSERT IGNORE INTO movies VALUES (1, "A Few Good Men");
INSERT IGNORE INTO movies VALUES (2, "When Harry Met Sally");
INSERT IGNORE INTO movies VALUES (3, "The Dark Knight");