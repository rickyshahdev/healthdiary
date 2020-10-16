CREATE DATABASE healthdiary;

CREATE TABLE healthdir (id SERIAL, title VARCHAR(20) NOT NULL, date DATE, description VARCHAR(200), image TEXT);

INSERT INTO healthdir (title, date, description, image) VALUES ('flushot','2016-06-22 19:10:25' , 'Time for flu shot',  'https://post.healthline.com/wp-content/uploads/2020/08/z-track-injection_thumb-1-732x549.jpg');
