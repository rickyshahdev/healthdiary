CREATE DATABASE healthdiary;

CREATE TABLE healthdir (id SERIAL, title VARCHAR(20) NOT NULL, date DATE, description VARCHAR(200), image TEXT);

INSERT INTO healthdir (title, date, description, image) VALUES ('flushot','2016-06-22 19:10:25' , 'Time for flu shot',  'https://post.healthline.com/wp-content/uploads/2020/08/z-track-injection_thumb-1-732x549.jpg');

INSERT INTO healthdir (title, date, description, image) VALUES ('Regular checkup','2020-11-22' , 'Never miss appointment with doctor', 'https://hhp-blog.s3.amazonaws.com/2018/02/iStock-639896942.jpg');

INSERT INTO healthdir (title, date, description, image) VALUES ('Buy Eye Glasses','2020-09-22' , 'Must protect eyes', 'https://images.ctfassets.net/u4vv676b8z52/5R2Vub7jZixnTg3d2yO5V1/49331e57dbe94a4019457fa380e2e121/computer-glasses-678x450.jpg?fm=jpg&q=80');
