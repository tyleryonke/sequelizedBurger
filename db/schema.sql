CREATE database burgers_db;

USE burgers_db;

CREATE table burgers (
	id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(250) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    createdAt TIMESTAMP NOT NULL,
	PRIMARY KEY (id)
);