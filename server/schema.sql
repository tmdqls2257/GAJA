 
CREATE TABLE users (
  id INT AUTO_INCREMENT,
  userName varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  phoneNumber INT NOT NULL,
  password INT NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE license (
  id INT AUTO_INCREMENT,
  name varchar(255),
  expiration varchar(255),
  userId varchar(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE bookmark (
  id INT AUTO_INCREMENT,
  url varchar(255),
  title varchar(255),
  userId varchar(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE scholarship (
  id INT AUTO_INCREMENT,
  products varchar(255),
  contact varchar(255),
  uni varchar(255),
  grade varchar(255),
  standard varchar(255),
  money varchar(255),
  period varchar(255),
  qualification varchar(255),
  document varchar(255),
  productId int,
  PRIMARY KEY (id)
);

ALTER TABLE license ADD FOREIGN KEY (id) REFERENCES users (id);

ALTER TABLE bookmark ADD FOREIGN KEY (id) REFERENCES users (id);

ALTER TABLE scholarship ADD FOREIGN KEY (productId) REFERENCES bookmark (id);