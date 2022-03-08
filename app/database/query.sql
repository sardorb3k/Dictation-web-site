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

create table Users(
                      id int primary key auto_increment,
                      fullname varchar(100),
                      uname varchar(50),
                      pwd varchar(100),
                      role enum('Admin', 'User')
);

create table Scores(
                       id int primary key auto_increment,
                       uid int,
                       foreign key(uid) references Users(id),
                       score int,
                       did int,
                       foreign key(did) references Dictionary(id)
)

