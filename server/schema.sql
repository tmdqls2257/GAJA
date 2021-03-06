CREATE TABLE Users (
  id INT AUTO_INCREMENT,
  userName varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  password varchar(255) NOT NULL,
  PRIMARY KEY (id)
);
CREATE TABLE License (
  id INT AUTO_INCREMENT,
  userId INT NOT NULL,
  name varchar(255),
  expiration varchar(255),
  PRIMARY KEY (id)
);
ALTER TABLE
  License
ADD
  FOREIGN KEY (userId) REFERENCES Users (id);