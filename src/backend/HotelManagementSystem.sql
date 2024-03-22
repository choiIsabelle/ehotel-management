CREATE TABLE Hotel (
    hotelId VARCHAR(255) PRIMARY KEY,
    email_address VARCHAR(255),
    num_associated_hotels INTEGER,
    central_office_street_address VARCHAR(255),
    central_office_address VARCHAR(255),
    phone_number VARCHAR(20)
);


CREATE TABLE Hotel_chain (
    hotel_chain_id SERIAL PRIMARY KEY,
    manager VARCHAR(255),
    chain_phone_number VARCHAR(20),
    num_rooms INTEGER,
    hotel_address VARCHAR(255),
    hotel_chain_name VARCHAR(255),
    hotelChainId VARCHAR(255) REFERENCES Hotel(hotelId)
);


CREATE TABLE Room (
    roomNumber SERIAL PRIMARY KEY,
    extendable BOOLEAN,
    room_capacity INTEGER,
    room_type VARCHAR(255),
    daily_price DECIMAL(10, 2),
    amenities VARCHAR(255),
    damages TEXT
roomHotelChainId  VARCHAR(255) REFERENCES Hotel_chain(hotel_chain_id)
);

CREATE TABLE Booking (
    reservation_id SERIAL PRIMARY KEY,
    employee_SSN VARCHAR(255),
    isARental BOOLEAN,
    employee_name VARCHAR(255),
    date DATE,
    bookingHotelChainId VARCHAR(255) REFERENCES Hotel_chain(hotel_chain_id )
);



CREATE TABLE Rental (
    rental_id SERIAL PRIMARY KEY,
    reservation_id INTEGER REFERENCES Booking(reservation_id),
    rental_duration INTERVAL,
    rental_amount DECIMAL(10, 2),
    room_number VARCHAR(255) REFERENCES Room(roomNumber),
roomHotelChainId VARCHAR(255) REFERENCES Hotel_chain(hotel_chain_id)
);

CREATE TABLE Customer (
    SSN VARCHAR(255) PRIMARY KEY,
    full_name VARCHAR(255),
    date_of_registration DATE,
    address VARCHAR(255)
);

CREATE TABLE Employee (
    SSN VARCHAR(255) PRIMARY KEY,
    employeeName VARCHAR(255),
    Address VARCHAR(255)
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
