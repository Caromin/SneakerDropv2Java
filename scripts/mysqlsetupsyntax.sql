use practiceDB;

create table `practiceDB`.`Users` (
`id` int not null auto_increment,
`username` varchar(255) not null,
`password` varchar(255) not null,
primary key (`id`)
);

create table `practiceDB`.`Addresses` (
`id` int not null auto_increment,
`street` varchar(255) not null,
`city` varchar(255) not null,
`state` varchar(255) not null,
`zipcode` int not null,
`userId` int not null,
primary key (`id`)
);

create table `practiceDB`.`Payments` (
`id` int not null auto_increment,
`userId` int not null,
`number` long not null,
`securitycode` int not null,
`month` int not null,
`year` int not null,
primary key (`id`)
);

create table `practiceDB`.`Products` (
`id` int not null auto_increment,
`productName` varchar(255) not null,
`description` varchar(255) not null,
`color` varchar(255),
`imageUrl` varchar(255) not null,
`brandId` int not null,
`typeId` int not null,
primary key(`id`)
);

create table `practiceDB`.`Listings` (
`id` int not null auto_increment,
`quantity` int not null,
`size` varchar(255),
`produceInfoId` int not null,
`userId` int not null,
primary key(`id`)
);

create table `practiceDB`.`Brands` (
`id` int not null auto_increment,
`brand` varchar(255),
primary key(`id`)
);

create table `practiceDB`.`Types` (
`id` int not null auto_increment,
`type` varchar(255),
primary key(`id`)
);

create table `practiceDB`.`Orders` (
`id` int not null auto_increment,
`userId` int,
`listingId` int,
`status` varchar(255),
primary key(`id`)
);

