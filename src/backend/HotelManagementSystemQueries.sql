-- Nested query returns all customer names who have booked either a mountain-view room or a room with capacity > 2
SELECT c.full_name FROM customer c 
WHERE C.SNN = SELECT b.customer_SSN from booking b 
where b.booking_id = ( SELECT r.roomId WHERE r.type = “mountain” OR r.capacity >= 2) 

-- Triggers

-- Trigger to automatically increment the number of associated hotels each time a new hotel is created and assigned to a Hotel Chain
CREATE FUNCTION increment_num_associated_hotels()
RETURNS TRIGGER AS $$
BEGIN

    UPDATE Hotel_chain
    SET num_associated_hotels = num_associated_hotels + 1
    WHERE hotel_chain_id = NEW.hotel_related_chain;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER increment_num_associated_hotels_trigger
AFTER INSERT ON Hotel
FOR EACH ROW
EXECUTE FUNCTION increment_num_associated_hotels();

-- Trigger to automatically increment the number of rooms belonging to a hotel each time a new room entity is inserted
CREATE FUNCTION increment_num_rooms()
RETURNS TRIGGER AS $$
BEGIN

    UPDATE Hotel
    SET num_rooms = num_rooms + 1
    WHERE hotel_id = NEW.room_hotel_id;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER increment_num_rooms_trigger
AFTER INSERT ON Room
FOR EACH ROW
EXECUTE FUNCTION increment_num_rooms();

-- Trigger to compute rental price based on departure and arrival date
CREATE FUNCTION calculate_rental_price()
RETURNS TRIGGER AS $$
BEGIN

    SELECT EXTRACT(DAY FROM NEW.departure_date) FROM Rental
    SELECT EXTRACT(DAY FROM NEW.arrival_date) FROM Rental
    NEW.price := (
        (SELECT EXTRACT(DAY FROM NEW.departure_date) FROM Rental)
        
(SELECT EXTRACT(DAY FROM NEW.arrival_date) FROM Rental)) * (
      SELECT daily_rate 
      FROM Room 
      WHERE room_number = NEW.room_of_rental);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER calculate_rental_price_trigger
BEFORE INSERT ON Rental
FOR EACH ROW
EXECUTE FUNCTION calculate_rental_price();
CREATE TABLE BOOKING_ARCHIVE (
    reservation_id SERIAL PRIMARY KEY,
    date DATE,
    room_number VARCHAR(255) REFERENCES Room(roomNumber),
    employee_SSN VARCHAR(255) REFERENCES Employee(SSN),
    customer_SSN VARCHAR(255) REFERENCES Customer(SSN)
);

-- Trigger for automatically creating a booking archive entity when a new booking entity is created
CREATE FUNCTION create_booking_archive()
RETURNS TRIGGER AS $$
BEGIN

    INSERT INTO BOOKING_ARCHIVE (date_of_reservation, is_a_rental, room_number, employee_SSN, customer_SSN)
    VALUES (CURRENT_DATE, FALSE, NEW.room_of_booking, NEW.employee_SSN, NEW.customer_SSN);

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER create_booking_archive_trigger
BEFORE INSERT ON Booking
FOR EACH ROW
EXECUTE FUNCTION create_booking_archive();

-- Trigger for automatically creating a rental archive entity when a new rental entity is created
CREATE FUNCTION create_rental_archive()
RETURNS TRIGGER AS $$
BEGIN

    INSERT INTO BOOKING_ARCHIVE (date_of_reservation, is_a_rental, room_number, employee_SSN, customer_SSN)
    VALUES (CURRENT_DATE, TRUE, NEW.room_of_rental, NEW.employee_SSN, NEW.customer_SSN);

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER create_rental_archive_trigger
BEFORE INSERT ON Rental
FOR EACH ROW
EXECUTE FUNCTION create_rental_archive();

-- Query for when an employee approves a booking such that a booking is converted into a rental
INSERT INTO Rental (customer_SSN, employee_SSN, departure_date, arrival_date, is_paid_for, room_of_rental)
SELECT customer_SSN, employee_SSN, departure_date, arrival_date, FALSE, room_of_booking
FROM Booking
WHERE booking_id = <desired_booking_id>; 

DELETE FROM Booking WHERE booking_id = $1 
-- integrate delete clause into query
-- replace <desired_booking_id> with $1 

-- Query for when a customer chooses to pay for a rental
UPDATE Rental
SET is_paid_for = TRUE
WHERE  rental_id= <desired_rental_id>;
-- replace <desired_rental_id> with $1



INSERT INTO Room(extendable, room_capacity, room_type, daily_rate, amenities, damages, associated_hotel_name, room_hotel_chain_id) 
VALUES (true, 10, 'mountain', 10.30, 'none', 'none', 'marriot atlanta', 2);

INSERT INTO Room(extendable, room_capacity, room_type, daily_rate, amenities, damages, associated_hotel_name, room_hotel_chain_id) 
VALUES (true, 10, 'riverside', 10.30, 'none', 'none', 'marriot atlanta', 1);

INSERT INTO Room(extendable, room_capacity, room_type, daily_rate, amenities, damages, room_hotel_chain_id) 
VALUES (true, 10, 'mountain', 10.30, 'many', 'none', 2);

INSERT INTO Hotel(hotel_name, manager, chain_phone_number, num_rooms, hotel_address, hotel_related_chain)
VALUES ('Marriot Residential Inn', 'Davis Marlon', '510938334', 10, 'Atlanta', 'Marriot Corporation');

INSERT INTO Hotel(hotel_name, manager, chain_phone_number, num_rooms, hotel_address, hotel_related_chain)
VALUES ('Hyatt Warsaw', 'Michael', '3414931', 10, 'Sydney', 'Hyatt');


INSERT INTO Hotel(hotel_name, manager, chain_phone_number, num_rooms, hotel_address, hotel_related_chain)
VALUES ('Hyatt Bangkok', 'Louise Reed', '153953', 3, 'Bangkok', 'Hyatt');

INSERT INTO Hotel(hotel_name, manager, chain_phone_number, num_rooms, hotel_address, hotel_related_chain)
VALUES ('Hyatt Las Vegas', 'Margrette Eddison', '153953', 3, 'Las Vegas', 'Hyatt');

INSERT INTO Hotel(hotel_name, manager, chain_phone_number, num_rooms, hotel_address, hotel_related_chain)
VALUES ('Hyatt Residential Suites', 'Ronald Harrison', '153953', 3, 'Houston, Texas', 'Hyatt');

INSERT INTO Hotel(hotel_name, manager, chain_phone_number, num_rooms, hotel_address, hotel_related_chain)
VALUES ('Hyatt Luxury Villas', 'John Sith', '434141', 2, 'Provo, Utah', 'Hyatt');

INSERT INTO Hotel(hotel_name, manager, chain_phone_number, num_rooms, hotel_address, hotel_related_chain)
VALUES ('Hyatt Residential Suites', 'Ronald Harrison', '153953', 3, 'Houston, Texas', 'Hyatt');

INSERT INTO Hotel(hotel_name, manager, chain_phone_number, num_rooms, hotel_address, hotel_related_chain)
VALUES  
    ('Marriot Livings', 'Emily White', '111111111', 2, '789 Oak St, Los Angeles, CA', 'Marriot Corporation'),
    ('Marriot Hotels', 'David Johnson', '545435345', 3, '456 Elm St, New York, NY', 'Marriot Corporation'),
    ('Marriot Hotel Downtown', 'Sarah Miller', '2425254353', 5, '123 Main St, Houston, Texas', 'Marriot Corporation'),
    ('Marriot Hotel Inner City', 'Michael Brown', '52354543', 3, 'Chicago, IL', 'Marriot Corporation'),
    ('Marriot Villas ', 'Diane Bronze', '52354543', 10, 'Chicago, IL', 'Marriot Corporation'),
    ('Marriot Premium Inn', 'Laura Wilson', '454454', 150, 'San Francisco, CA', 'Marriot Corporation');


INSERT INTO Hotel(hotel_name, manager, chain_phone_number, num_rooms, hotel_address, hotel_related_chain)
VALUES 
    ('Hyatt Residential Suites Plus', 'John Smith', '123456789', 50, '123 Main St, Houston, Texas', 'Hyatt'),
    ('Marriott Downtown', 'Alice Johnson', '987654321', 75, '456 Elm St, New York, NY', 'Marriot Corporation'),




INSERT INTO Hotel_chain(hotel_chain_id, email_address, num_associated_hotels, central_office_street_address, hotel_location, phone_number)
VALUES  ('Marriot Hotel A', 'Emily White', '111111111', 2, '789 Oak St, Los Angeles, CA', 'Marriot Corporation'),
('Marriot Hotels', 'David Johnson', '545435345', 3, '456 Elm St, New York, NY', 'Marriot Corporation')
('Marriot Hotel Downtown', 'Sarah Miller', '2425254353', 5, '123 Main St, Houston, Texas', 'Marriot Corporation'),
('Marriot Hotel Inner City', 'Michael Brown', '52354543', 3, 'Chicago, IL', 'Marriot Corporation'),
('Marriot Villas ', 'Diane Bronze', '52354543', 10, 'Chicago, IL', 'Marriot Corporation'),
 ('Marriot Premium Inn', 'Laura Wilson', '454454', 150, 'San Francisco, CA', 'Marriot Corporation');


INSERT INTO Hotel_chain(hotel_chain_id, email_address, num_associated_hotels, central_office_street_address, hotel_location, phone_number)
VALUES ( 'Hyatt', 'hyatt@gmail.com', 3, 'Abu Dhabi', 'Dubai City', '98108382'
);

INSERT INTO Hotel_chain(hotel_chain_id, email_address, num_associated_hotels, central_office_street_address, hotel_location, phone_number)
VALUES ( 'Westin', 'theWestin@gmail.com', 3, 'Abu Dhabi', 'Charlotte St.', '5329842'
);

INSERT INTO Hotel_chain(hotel_chain_id, email_address, num_associated_hotels, central_office_street_address, hotel_location, phone_number)
VALUES ( 'Blue Waters', 'bluewatersuites@gmail.com', 3, 'Ottawa', 'Elgin St.', '5329842'
);

INSERT INTO Hotel_chain(hotel_chain_id, email_address, num_associated_hotels, central_office_street_address, hotel_location, phone_number)
VALUES ( 'Regin Inn', 'regin.stays@gmail.com', 3, 'Ottawa', 'Sommerset St.', '985683491'
);
INSERT INTO Employee(SSN, full_name, work_place_id, address) VALUES('1', 'Margo', 'marriot inc', 'elsewhere');

SELECT room.room_number, room.room_type 
FROM Room JOIN Hotel ON Room.room_hotel_chain_id = Hotel.hotel_id 
WHERE Hotel.hotel_address = 'atlanta';


INSERT INTO room(
	extendable, 
	room_capacity,
	room_type,
	daily_rate,
	amenities,
	damages,
	associated_hotel_name,
	room_hotel_chain_id
) VALUES(
	false,
	2,
	'double',
	100.0,
	'pool, gym',
	'none',
	'marriot atlanta',
	1
);

INSERT INTO room(
	extendable, 
	room_capacity,
	room_type,
	daily_rate,
	amenities,
	damages,
	associated_hotel_name,
	room_hotel_chain_id
) VALUES(
	false,
	3,
	'Multiple',
	250.0,
	'spa, cleaning services, gym',
	'broken closet door',
	'Marriot Livings',
	2
);