CREATE DATABASE updatead;

CREATE TABLE IF NOT EXISTS form_office (
	id INT AUTO_INCREMENT,
	office VARCHAR(255) NOT NULL,
	PRIMARY KEY (id)
) ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS form_structure (
	id INT AUTO_INCREMENT,
	organization_unit VARCHAR(255) NOT NULL,
	initials VARCHAR(15) NOT NULL,
	PRIMARY KEY (id)
) ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS form_company (
	id INT AUTO_INCREMENT,
	company VARCHAR(255) NOT NULL,
	PRIMARY KEY (id)
) ENGINE=INNODB;