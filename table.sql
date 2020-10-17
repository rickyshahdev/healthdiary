CREATE DATABASE healthdiary;

CREATE TABLE healthdir (id SERIAL, title VARCHAR(20) NOT NULL, date DATE, description VARCHAR(200), image TEXT);

INSERT INTO healthdir (title, date, description, image) VALUES ('flushot','2016-06-22 19:10:25' , 'Time for flu shot',  'https://post.healthline.com/wp-content/uploads/2020/08/z-track-injection_thumb-1-732x549.jpg');

INSERT INTO healthdir (title, date, description, image) VALUES ('Regular checkup','2020-11-22' , 'Never miss appointment with doctor', 'https://hhp-blog.s3.amazonaws.com/2018/02/iStock-639896942.jpg');


CREATE TABLE login (id SERIAL, username VARCHAR (255) NOT NULL, password VARCHAR(16));

INSERT INTO login (username, password) VALUES ('ricky, 'asdfsd');
