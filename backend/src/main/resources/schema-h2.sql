DROP TABLE USERS;
--
CREATE TABLE USERS (
  USERID     NUMBER(10, 0) NOT NULL AUTO_INCREMENT,
  USERNAME   VARCHAR2(255)          DEFAULT NULL,
  PASSWORD   VARCHAR2(255)          DEFAULT NULL,
  NAME       VARCHAR2(255)          DEFAULT NULL,
  FIRST_NAME VARCHAR2(255)          DEFAULT NULL,
  MAIN_JOB   VARCHAR2(255)          DEFAULT NULL,
  SIDE_JOB   VARCHAR2(255)          DEFAULT NULL,
  EMAIL      VARCHAR2(255)          DEFAULT NULL,
  RATING     NUMBER(255)            DEFAULT NULL,
  PHOTO      VARCHAR2(255)          DEFAULT NULL,
  CONNECTIONID     VARCHAR2(255)    DEFAULT NULL,
);
--



-- INSERT INTO users (username, password, name, first_name, main_job, side_job, email, rating, photo,connectionid)VALUES('mickey', 'cheese', 'Mickey Mouse', 'Mickey', 'Sound Mixer', 'Editor', 'soma@as.com', 3, 'http://img.img.com', 1);

INSERT INTO users (username, password, name, first_name,  main_job, side_job, email, rating, photo,connectionid)VALUES('minnie', 'cheese', 'Minnie Mouse', 'Minnie', 'Sound Editor', 'Editor', 'Lasdlk@as.com', 4, 'http://img.img.com','2');
-- INSERT INTO users (username, password, name, first_name,  main_job, side_job, email, rating, photo,connectionid)VALUES('minnie', 'cheese', 'Minnie Mouse', 'Minnie', 'Sound Editor', 'Editor', 'Lasdlk@as.com', 4, 'http://img.img.com',1);
-- INSERT INTO users (username, password, name, first_name,  main_job, side_job, email, rating, photo,connectionid)VALUES('minnie', 'cheese', 'Minnie Mouse', 'Minnie', 'Sound Editor', 'Editor', 'Lasdlk@as.com', 4, 'http://img.img.com',(1,2,3));
-- INSERT INTO users (username, password, name, first_name,  main_job, side_job, email, rating, photo,connectionid)VALUES( 'James', 'cheese','James Cameron', 'James','Director','Being Awesome','titanic@imawesome.com',5,'http://img.img.com','1');
-- insert into users (username, password, first_name, last_name, main_job, side_job, rating, photo) values( 'minnie@disney.com', '$2a$10$kSqU.ek5pDRMMK21tHJlceS1xOc9Kna4F0DD2ZwQH/LAzH0ML0p6.', 'Minnie','Mouse','Editor','VideoGirl',5,'http://img.minnie.com');
-- insert into users (username, password, first_name, last_name, main_job, side_job, rating, photo) values( 'leo@disney.com', '$2a$10$kSqU.ek5pDRMMK21tHJlceS1xOc9Kna4F0DD2ZwQH/LAzH0ML0p6.', 'Minnie','Mouse','Editor','LLALLA',5,'http://img.ASDF.com');
-- insert into users (username, password, first_name, last_name, main_job, side_job, rating, photo) values( 'admin', 'admin', 'Admin','Admin','Admin','LLALLA',5,'http://img.ASDF.com');

-- insert into users (user_id, username, password, first_name, last_name, admin) values(2, 'minnie', '$2a$10$MnHcLn.XdLx.iMntXsmdgeO1B4wAW1E5GOy/VrLUmr4aAzabXnGFq', 'Minnie','Mouse', 'no');
--
-- insert into users (user_id, username, password, first_name, last_name, admin) values(3, 'donald', '$2a$10$0UCBI04PCXiK0pF/9kI7.uAXiHNQeeHdkv9NhA1/xgmRpfd4qxRMG', 'Donald','Duck', 'no');

-- CALL ARRAY_CONTAINS((USERS.CONNECTIONID), CONNECTION.CONNECTIONID);


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

INSERT INTO gigs (seeking, description, rate, location, date, userid)VALUES ('soundmixer', 'Looking for a great Sound mixer to work on my project', '$150/day', 'NYC', '2017-12-17', 1);
INSERT INTO gigs (seeking, description, rate, location, date, userid) VALUES('Sound mixer', 'Looking for a great Sound mixer to work on my project', '$150/day','NYC','2017-12-17', 1);
INSERT INTO gigs (seeking, description, rate, location, date, userid)VALUES ('soundeditor', 'Work for me!', '$340/day', 'LA', '2017-12-17', 2);
-- insert into gigs (seeking, description, rate, location, date, userid) values('Sound editor', 'Work for me!', '$340/day','LA','2017-12-17', 3);


CREATE TABLE CONNECTION (
  CONNECTIONID    VARCHAR2(255)   DEFAULT NULL
);

-- INSERT INTO connection (CONNECTIONID)VALUES (1);
INSERT INTO connection (CONNECTIONID)VALUES ('2');



DROP SEQUENCE hibernate_sequence;

CREATE SEQUENCE hibernate_sequence;