DROP TABLE USERS;
--
CREATE TABLE USERS (
  USERID      NUMBER(10, 0) NOT NULL AUTO_INCREMENT,
  USERNAME    VARCHAR2(255)          DEFAULT NULL,
  PASSWORD    VARCHAR2(255)          DEFAULT NULL,
  NAME        VARCHAR2(255)          DEFAULT NULL,
  FIRST_NAME  VARCHAR2(255)          DEFAULT NULL,
  MAIN_JOB    VARCHAR2(255)          DEFAULT NULL,
  SIDE_JOB    VARCHAR2(255)          DEFAULT NULL,
  EMAIL       VARCHAR2(255)          DEFAULT NULL,
  RATING      NUMBER(255)            DEFAULT NULL,
  PHOTO       VARCHAR2(255)          DEFAULT NULL,
  CONNECTORID NUMBER(10, 0) NOT NULL
);
--


INSERT INTO users (username, password, name, first_name, main_job, side_job, email, rating, photo, connectorid)
VALUES
  ('mickey', 'cheese', 'Mickey Mouse', 'Mickey', 'Sound Mixer', 'Editor', 'soma@as.com', 3, 'http://img.img.com', 1);
INSERT INTO users (username, password, name, first_name, main_job, side_job, email, rating, photo, connectorid) VALUES
  ('minnie', 'cheese', 'Minnie Mouse', 'Minnie', 'Sound Editor', 'Editor', 'Lasdlk@as.com', 4, 'http://img.img.com', 2);
INSERT INTO users (username, password, name, first_name, main_job, side_job, email, rating, photo, connectorid) VALUES
  ('James', 'cheese', 'James Cameron', 'James', 'Director', 'Being Awesome', 'titanic@imawesome.com', 5,
   'http://img.img.com', 3);

INSERT INTO users (username, password, name, first_name, main_job, side_job, email, rating, photo, connectorid) VALUES
  ('Daffy', 'cheese', 'Daffy Duck ', 'Daffy', 'Sound Mixer', 'Boom Operator', 'Lasdlk@as.com', 4, 'http://img.img.com', 2);

-- insert into users (username, password, first_name, last_name, main_job, side_job, rating, photo) values( 'leo@disney.com', '$2a$10$kSqU.ek5pDRMMK21tHJlceS1xOc9Kna4F0DD2ZwQH/LAzH0ML0p6.', 'Minnie','Mouse','Editor','LLALLA',5,'http://img.ASDF.com');
-- insert into users (username, password, first_name, last_name, main_job, side_job, rating, photo) values( 'admin', 'admin', 'Admin','Admin','Admin','LLALLA',5,'http://img.ASDF.com');
-- insert into users (user_id, username, password, first_name, last_name, admin) values(2, 'minnie', '$2a$10$MnHcLn.XdLx.iMntXsmdgeO1B4wAW1E5GOy/VrLUmr4aAzabXnGFq', 'Minnie','Mouse', 'no');
-- insert into users (user_id, username, password, first_name, last_name, admin) values(3, 'donald', '$2a$10$0UCBI04PCXiK0pF/9kI7.uAXiHNQeeHdkv9NhA1/xgmRpfd4qxRMG', 'Donald','Duck', 'no');


--Remember, everything has to be be verbatim with the class
DROP TABLE GIGS;
--
CREATE TABLE GIGS (
  GIGID       NUMBER(10, 0) NOT NULL AUTO_INCREMENT,
  SEEKING     VARCHAR2(255)          DEFAULT NULL,
  DESCRIPTION VARCHAR2(255)          DEFAULT NULL,
  RATE        VARCHAR2(255)          DEFAULT NULL,
  LOCATION    VARCHAR2(255)          DEFAULT NULL,
  date        DATE          NOT NULL,
  USERID      NUMBER(10, 0) NOT NULL
);

INSERT INTO gigs (seeking, description, rate, location, date, userid)
VALUES ('soundmixer', 'Looking for a great Sound mixer to work on my project', '$150/day', 'NYC', '2017-12-17', 1);
INSERT INTO gigs (seeking, description, rate, location, date, userid)
VALUES ('Editor', 'Looking for editor to help me on my Thesis Film project', '$150/day', 'NYC', '2017-12-17', 1);
INSERT INTO gigs (seeking, description, rate, location, date, userid)
VALUES ('soundeditor', 'Work for me!', '$340/day', 'LA', '2017-12-17', 2);
-- insert into gigs (seeking, description, rate, location, date, userid) values('Sound editor', 'Work for me!', '$340/day','LA','2017-12-17', 3);


CREATE TABLE CONNECTION (
  ID      NUMBER(10, 0) NOT NULL AUTO_INCREMENT,
  USERID1 NUMBER(10, 0) NOT NULL,
  USERID2 NUMBER(10, 0) NOT NULL,
  --   FOREIGN KEY (CONNECTORID) REFERENCES USERS(CONNECTORID)
  PRIMARY KEY (USERID1, USERID2)
);

-- INSERT INTO connection (userid, friendid) VALUES (1, 1);
INSERT INTO connection (userid1, userid2) VALUES (1, 2);
INSERT INTO connection (userid1, userid2) VALUES (1, 3);
INSERT INTO connection (userid1, userid2) VALUES (2, 3);
INSERT INTO connection (userid1, userid2) VALUES (2, 1);
INSERT INTO connection (userid1, userid2) VALUES (1, 4);
-- INSERT INTO connection (userid1, userid2) VALUES (3, 2);
-- INSERT INTO connection (userid1, userid2) VALUES (3, 1);


-- CREATE TABLE `FRIEND` (
--   FRIENDID   DOUBLE,
--   FRIENDNAME VARCHAR(765)
-- );
--
-- INSERT INTO friend (friendid, friendname) VALUES (1, 'Jackie');
-- INSERT INTO friend (friendid,friendname) VALUES (2, 'Jace');


DROP SEQUENCE hibernate_sequence;

CREATE SEQUENCE hibernate_sequence;

