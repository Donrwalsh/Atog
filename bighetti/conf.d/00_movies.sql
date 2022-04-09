CREATE TABLE IF NOT EXISTS movies (id INT NOT NULL AUTO_INCREMENT, 
            title VARCHAR(100), 
            PRIMARY KEY ( id ) 
            ) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;  

INSERT IGNORE INTO movies VALUES (1, 'A Few Good Men');