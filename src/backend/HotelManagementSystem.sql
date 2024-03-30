CREATE TABLE Hotel_chain (
    hotel_chain_id VARCHAR(255) PRIMARY KEY,
    email_address VARCHAR(255),
    num_associated_hotels INTEGER,
    central_office_street_address VARCHAR(255),
    hotel_location VARCHAR(255),
    phone_number VARCHAR(20)
);

CREATE TABLE Hotel (
    hotel_id SERIAL PRIMARY KEY,
    hotel_name VARCHAR(255) UNIQUE,
    manager VARCHAR(255),
    chain_phone_number VARCHAR(20),
    num_rooms INTEGER,
    hotel_address VARCHAR(255),
    hotel_related_chain VARCHAR(255) REFERENCES Hotel_chain(hotel_chain_id) ON DELETE CASCADE
);


CREATE TABLE Room (
    room_number SERIAL PRIMARY KEY,
    extendable BOOLEAN,
    room_capacity INTEGER,
    room_type VARCHAR(255),
    daily_rate DECIMAL(10, 2),
    amenities VARCHAR(255),
    damages TEXT,
    associated_hotel_name VARCHAR(255) REFERENCES Hotel(hotel_name),
room_hotel_chain_id INTEGER REFERENCES Hotel(hotel_id) ON DELETE CASCADE
);

CREATE TABLE Booking (
    booking_id SERIAL PRIMARY KEY,
    customer_SSN VARCHAR(255) REFERENCES customer(SSN) ON DELETE CASCADE,
    employee_SSN VARCHAR(255) REFERENCES employee(SSN),
    is_a_rental BOOLEAN,
    departure_date DATE,
    arrival_date DATE,
    room_of_booking INTEGER REFERENCES Room(room_number)
);


CREATE TABLE Rental (
    rental_id SERIAL PRIMARY KEY,
    customer_SSN VARCHAR(255) REFERENCES customer(SSN),
    employee_SSN VARCHAR(255) REFERENCES employee(SSN),
    is_a_rental BOOLEAN,
    departure_date DATE,
    arrival_date DATE,
    room_of_booking VARCHAR(255) REFERENCES Room(room_number),
    booking_hotel_chain_id VARCHAR(255) REFERENCES Hotel_chain(hotel_chain_id )
);

CREATE TABLE Customer (
    SSN VARCHAR(255) PRIMARY KEY,
    full_name VARCHAR(255),
    age INTEGER,
    date_of_registration DATE NOT NULL DEFAULT current_timestamp,
    address VARCHAR(255),
    credit_card_number VARCHAR(255),
    CONSTRAINT customer_age CHECK (age >= 18)
);

CREATE TABLE Phone_numbers (
    primary_phone_number VARCHAR(16),
    SSN VARCHAR(255) REFERENCES Person(personSSN)
);

CREATE TABLE Person(
    personSSN VARCHAR(255) PRIMARY KEY,
    customerSSN VARCHAR(255) REFERENCES customer(SSN),
    employeeSSN VARCHAR(255) REFERENCES employee(SNN)
);

CREATE TABLE Employee (
    SSN VARCHAR(255) PRIMARY KEY,
    full_name VARCHAR(255),
    work_place_id VARCHAR(255) REFERENCES Hotel_chain(hotel_chain_id),
    address VARCHAR(255)
);

CREATE TABLE CUSTOMER_PAYMENT (
    credit_card_number VARCHAR(255) PRIMARY KEY,
    customer_SSN VARCHAR(255) REFERENCES Customer(SSN)
);

CREATE TABLE BOOKING_ARCHIVE (
    reservation_id INTEGER PRIMARY KEY,
    date DATE,
    room_number VARCHAR(255) REFERENCES Room(roomNumber),
    employee_SSN VARCHAR(255) REFERENCES Employee(SSN),
    customer_SSN VARCHAR(255) REFERENCES Customer(SSN),
    num INTEGER
);
