DROP TABLE USERS;
--
CREATE TABLE USERS (
USERID NUMBER(10,0) NOT NULL AUTO_INCREMENT,
USERNAME VARCHAR2(255) DEFAULT NULL,
PASSWORD VARCHAR2(255) DEFAULT NULL,
NAME VARCHAR2(255) DEFAULT NULL,
FIRST_NAME VARCHAR2(255) DEFAULT NULL,
MAIN_JOB VARCHAR2(255) DEFAULT NULL,
SIDE_JOB VARCHAR2(255) DEFAULT NULL,
EMAIL VARCHAR2(255) DEFAULT NULL,
RATING NUMBER(255) DEFAULT NULL,
PHOTO VARCHAR2(255) DEFAULT NULL);
--
DROP SEQUENCE hibernate_sequence;

CREATE SEQUENCE hibernate_sequence;


insert into users (username, password, name, first_name,  main_job, side_job, email, rating, photo) values( 'mickey', 'cheese','Mickey Mouse', 'Mickey','Sound Mixer','Editor','soma@as.com',3,'http://img.img.com');
insert into users (username, password, name, first_name,  main_job, side_job, email, rating, photo) values( 'leo', 'cheese','Mickey Mouse', 'Mickey','Sound Mixer','jhthjt','soma@as.com',3,'http://img.img.com');
-- insert into users (username, password, first_name, last_name, main_job, side_job, rating, photo) values( 'minnie@disney.com', '$2a$10$kSqU.ek5pDRMMK21tHJlceS1xOc9Kna4F0DD2ZwQH/LAzH0ML0p6.', 'Minnie','Mouse','Editor','VideoGirl',5,'http://img.minnie.com');
-- insert into users (username, password, first_name, last_name, main_job, side_job, rating, photo) values( 'leo@disney.com', '$2a$10$kSqU.ek5pDRMMK21tHJlceS1xOc9Kna4F0DD2ZwQH/LAzH0ML0p6.', 'Minnie','Mouse','Editor','LLALLA',5,'http://img.ASDF.com');
-- insert into users (username, password, first_name, last_name, main_job, side_job, rating, photo) values( 'admin', 'admin', 'Admin','Admin','Admin','LLALLA',5,'http://img.ASDF.com');

-- insert into users (user_id, username, password, first_name, last_name, admin) values(2, 'minnie', '$2a$10$MnHcLn.XdLx.iMntXsmdgeO1B4wAW1E5GOy/VrLUmr4aAzabXnGFq', 'Minnie','Mouse', 'no');
--
-- insert into users (user_id, username, password, first_name, last_name, admin) values(3, 'donald', '$2a$10$0UCBI04PCXiK0pF/9kI7.uAXiHNQeeHdkv9NhA1/xgmRpfd4qxRMG', 'Donald','Duck', 'no');





DROP TABLE GIGS;
--
CREATE TABLE GIGS (
GIGID NUMBER(10,0) NOT NULL AUTO_INCREMENT,
SEEKING VARCHAR2(255) DEFAULT NULL,
DESCRIPTION VARCHAR2(255) DEFAULT NULL,
RATE VARCHAR2(255) DEFAULT NULL,
LOCATION VARCHAR2(255) DEFAULT NULL,
DATE VARCHAR2(255) DEFAULT NULL,
USERID NUMBER(10,0) NOT NULL);

insert into gigs (seeking, description, rate, location, date,userid) values('Sound mixer', 'Looking for a great Sound mixer to work on my project', '$150/day','NYC','2017-12-17',1);
insert into gigs (seeking, description, rate, location, date,userid) values('Sound mixer', 'Looking for a great Sound mixer to work on my project', '$150/day','NYC','2017-12-17',1);
