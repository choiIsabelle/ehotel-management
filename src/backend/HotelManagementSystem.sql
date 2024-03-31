CREATE TABLE Hotel_chain (
    hotel_chain_id VARCHAR(255) PRIMARY KEY,
    email_address VARCHAR(255),
    num_associated_hotels INTEGER,
    central_office_street_address VARCHAR(255),
    hotel_location VARCHAR(255),
    phone_number VARCHAR(20)
);
-- add a trigger to automatically incremement the num_associated_hotels upon initialization of a new hotel
-- may change phone number attribute to a phone number table, which utilizes foreign key

CREATE TABLE Hotel (
    hotel_id SERIAL PRIMARY KEY,
    hotel_name VARCHAR(255) UNIQUE,
    manager VARCHAR(255),
    rating INTEGER,
    email_address VARCHAR(255),
    phone_number VARCHAR(20),
    num_rooms INTEGER,
    hotel_address VARCHAR(255),
    hotel_related_chain VARCHAR(255) REFERENCES Hotel_chain(hotel_chain_id) ON DELETE CASCADE
);

-- requires a trigger to increment the number of rooms when a new room associated with a certain hotel is added

CREATE TABLE Room (
    room_number SERIAL PRIMARY KEY,
    extendable BOOLEAN,
    room_capacity INTEGER,
    view_type VARCHAR(255),
    daily_rate DECIMAL(10, 2),
    amenities VARCHAR(255),
    damages TEXT,
room_hotel_id INTEGER REFERENCES Hotel(hotel_id) ON DELETE CASCADE
);

CREATE TABLE Amenities (
    amenities_id VARCHAR(255) PRIMARY KEY,
    room_num INTEGER REFERENCES Room(room_number),
    has_tv boolean,
    has_air_conditioning boolean,
    has_fridge boolean,
    has_hot_tub boolean
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
    is_paid_for boolean,
    price DECIMAL(10, 2),
    room_of_rental VARCHAR(255) REFERENCES Room(room_number)
);

CREATE TABLE Customer (
    SSN VARCHAR(255) PRIMARY KEY,
    full_name VARCHAR(255),
    age INTEGER,
    date_of_registration DATE DEFAULT current_timestamp,
    customer_address VARCHAR(255),
    credit_card_number VARCHAR(255),
    CONSTRAINT customer_age CHECK (age >= 18),
    phone_numbers VARCHAR(255) REFERENCES Phone_numbers(person_phone_numbers_id)
);

CREATE TABLE Phone_numbers (
    person_phone_numbers_id VARCHAR(255) PRIMARY KEY,
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
    full_name VARCHAR(255),
    work_place_id VARCHAR(255) REFERENCES Hotel_chain(hotel_chain_id),
    employee_address VARCHAR(255),
    employee_role VARCHAR(255)
);

CREATE TABLE Employee_Roles (
    employee_role_id VARCHAR(255) PRIMARY KEY,
    employee VARCHAR(255) REFERENCES Employee(SSN),
    employee_role1 VARCHAR(255),
    employee_role2 VARCHAR(255)
);

CREATE TABLE CUSTOMER_PAYMENT (
    credit_card_number VARCHAR(255) PRIMARY KEY,
    customer_SSN VARCHAR(255) REFERENCES Customer(SSN)
);

CREATE TABLE BOOKING_ARCHIVE (
    reservation_id SERIAL PRIMARY KEY,
    date_of_reservation DATE,
    is_a_rental boolean,
    room_number VARCHAR(255) REFERENCES Room(room_number),
    employee_SSN VARCHAR(255) REFERENCES Employee(SSN),
    customer_SSN VARCHAR(255) REFERENCES Customer(SSN)
);