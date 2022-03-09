drop database if exists Dictionary;

create database Dictionary;

use Dictionary;

create table Dictionary(
                           id int primary key auto_increment,
                           header varchar(50),
                           text text,
                           audio varchar(1000),
                           author varchar(50)
);

create table Scores(
                       id int primary key auto_increment,
                       uname varchar(50),
                       score int,
                       did int,
                       foreign key(did) references Dictionary(id)
);