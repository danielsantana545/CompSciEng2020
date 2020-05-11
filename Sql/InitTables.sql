use studentsystem;

drop table if exists user;
drop table if exists tutor;
drop table if exists student;
drop table if exists proffessor;
drop table if exists semester;
drop table if exists course;
drop table if exists courseInstance;
drop table if exists event;

create table if not exists user( 
userId int primary key NOT NULL AUTO_INCREMENT,
email varchar(320) NOT NULL,
fname varchar(20),
lname varchar(30)
);

create table if not exists tutor(
	userId int primary key references user(userId)
	#I have not idea how to put in days worked.
);

create table if not exists student(
	userId int primary key NOT NULL AUTO_INCREMENT,
	name varchar(30)
    );

create table if not exists proffessor(
	userId int primary key references user(userId)
);

create table if not exists semester(
    startDate date,
    endDate date,
    year varchar(15) primary key NOT NULL
);

create table if not exists course(
	courseId varchar(10) primary key not null,
	courseName varchar(50),
    courseDescription varchar(255)
);

create table if not exists courseInstance(
	instId int primary key NOT NULL AUTO_INCREMENT,
	coursId varchar(10) references course(coursId),
    semester varchar(15) references semester(year),
    proffesorID int references proffesor(userId)
);

create table if not exists event(
	assignment varchar(255),
    timeIn TIME,
    timeOut time,
    eventDate date,
    course int references courseInstance(instId),
    student int references student(userId),
    tutor int references tutor(userId)
);




