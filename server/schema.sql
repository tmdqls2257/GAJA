 
CREATE TABLE users (
  id INT AUTO_INCREMENT,
  userName varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  password INT NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE license (
  id INT AUTO_INCREMENT,
  name varchar(255),
  expiration varchar(255),
  PRIMARY KEY (id)
);


ALTER TABLE license ADD FOREIGN KEY (id) REFERENCES users (id);
