CREATE TABLE Hotel_chain (
	hotel_chain_id VARCHAR(255) PRIMARY KEY,
	hotel_chain_name VARCHAR(255) UNIQUE,
	email_address VARCHAR(255),
	num_associated_hotels INTEGER DEFAULT 0,
	central_office_address VARCHAR(255),
	phone_number VARCHAR(12)
);

CREATE TABLE Employee_roles (
	employee_roles_id SERIAL PRIMARY KEY,
	employee_role1 VARCHAR(255),
	employee_role2 VARCHAR(255)
);

CREATE TABLE Hotel (
    hotel_id SERIAL PRIMARY KEY,
    manager VARCHAR(255),
    hotel_name VARCHAR(255) UNIQUE,
    phone_number VARCHAR(20),
    rating INTEGER,
    num_rooms INTEGER DEFAULT 0,
    hotel_address VARCHAR(255),
    hotel_related_chain VARCHAR(255) REFERENCES Hotel_chain(hotel_chain_id) ON DELETE CASCADE
);

CREATE TABLE Room (
	room_number SERIAL PRIMARY KEY,
	extendable BOOLEAN,
	room_capacity INTEGER,
	room_type VARCHAR(255),
	daily_rate DECIMAL(10,2),
	room_amenities INTEGER REFERENCES Amenities(amenities_id),
	damages TEXT,
	room_hotel INTEGER REFERENCES Hotel(hotel_id) ON DELETE CASCADE	
);

CREATE TABLE Amenities (
	amenities_id SERIAL PRIMARY KEY,
	has_tv BOOLEAN,
	has_air_conditioning BOOLEAN,
	has_fridge BOOLEAN,
	has_hot_tub BOOLEAN
);

CREATE TABLE Booking (
	booking_id SERIAL PRIMARY KEY,
	customer_SSN VARCHAR(255) REFERENCES customer(SSN) ON DELETE CASCADE,
	employee_SSN VARCHAR(255) REFERENCES employee(SSN),
	departure_date DATE,
	arrival_date DATE,
	room_of_booking INTEGER REFERENCES Room(room_number)
);

CREATE TABLE Rental (
	rental_id SERIAL PRIMARY KEY,
	customer_SSN VARCHAR(255) REFERENCES customer(SSN),
	employee_SSN VARCHAR(255) REFERENCES employee(SSN),
	departure_date DATE,
	arrival_date DATE,
	is_paid_for BOOLEAN DEFAULT FALSE,
	price DECIMAL(10,2),
	room_of_rental INTEGER REFERENCES Room(room_number)
);

CREATE TABLE Customer (
	SSN VARCHAR(255) PRIMARY KEY,
	first_name VARCHAR(255),
	last_name VARCHAR(255),
	age INTEGER,
	date_of_registration DATE DEFAULT current_timestamp,
	customer_address VARCHAR(255),
	credit_card_number VARCHAR(255),
	CONSTRAINT customer_age CHECK(age >= 18),
	phone_numbers INTEGER REFERENCES Phone_numbers(person_phone_numbers_id)
);

CREATE TABLE Phone_numbers (
	person_phone_numbers_id SERIAL PRIMARY KEY,
	primary_number VARCHAR(12),
	secondary_number VARCHAR(12)
);


CREATE TABLE Person(
    personSSN VARCHAR(255) PRIMARY KEY,
    customerSSN VARCHAR(255) REFERENCES customer(SSN),
    employeeSSN VARCHAR(255) REFERENCES employee(SNN)
);

CREATE TABLE Employee (
	SSN VARCHAR(255) PRIMARY KEY,
	first_name VARCHAR(255),
	last_name VARCHAR(255),
	work_place_id VARCHAR(255),
	address VARCHAR(255),
	phone_numbers INTEGER REFERENCES Phone_numbers(person_phone_numbers_id),
	roles INTEGER REFERENCES Employee_roles(employee_roles_id)
);


CREATE TABLE Booking_archive (
	reservation_id SERIAL PRIMARY KEY,
	date_of_reservation DATE DEFAULT CURRENT_TIMESTAMP,
	is_a_rental BOOLEAN,
	room_number INTEGER REFERENCES Room(room_number),
	employee_SSN VARCHAR(255) REFERENCES Employee(SSN),
	customer_SSN VARCHAR(255) REFERENCES Customer(SSN)
);
