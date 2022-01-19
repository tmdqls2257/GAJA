 
CREATE TABLE user (
  id INT NOT NULL AUTO_INCREMENT,
  userId varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  phoneNumber INT NOT NULL,
  password INT NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE licens (
  id INT AUTO_INCREMENT,
  name varchar(255),
  expiration INT,
  userId varchar(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE bookmark (
  id INT AUTO_INCREMENT,
  url varchar(255),
  title varchar(255),
  userId varchar(255) NOT NULL,
  created_at datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (title)
);

CREATE TABLE scholarship (
  id varchar(255),
  products varchar(255),
  contact varchar(255),
  uni varchar(255),
  grade varchar(255),
  standard varchar(255),
  money varchar(255),
  period varchar(255),
  qualification varchar(255),
  document varchar(255),
  PRIMARY KEY (id)
);

ALTER TABLE licens ADD FOREIGN KEY (id) REFERENCES user (id);

ALTER TABLE bookmark ADD FOREIGN KEY (id) REFERENCES user (id);

ALTER TABLE scholarship ADD FOREIGN KEY (products) REFERENCES bookmark (title);