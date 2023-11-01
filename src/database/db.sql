-- creating database

CREATE DATABASE crudMysql;

-- using the database
use crudMysql;

--creating a TABLE

CREATE TABLE customer (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    adress VARCHAR(100) NOT NULL,
    phone VARCHAR(15)
);

SHOW TABLES;

describe customer

GRANT ALL PRIVILEGES ON crudMysql.* TO 'Shadaz'@'localhost' IDENTIFIED BY 'SHADAZ';
