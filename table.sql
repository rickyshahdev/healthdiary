CREATE DATABASE healthdiary;

CREATE TABLE healthdir (id SERIAL, title VARCHAR(20) NOT NULL, date timestamp, description VARCHAR(200));

INSERT INTO healthdir (title, date, description) VALUES ('flushot','2016-06-22 19:10:25' , 'Time for flu shot' );
