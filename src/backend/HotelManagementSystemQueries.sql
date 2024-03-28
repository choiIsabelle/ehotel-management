-- Nested query returns all customer names who have booked either a mountain-view room or a room with capacity > 2
SELECT c.full_name FROM customer c 
WHERE C.SNN = SELECT b.customer_SSN from booking b 
where b.booking_id = ( SELECT r.roomId WHERE r.type = “mountain” OR r.capacity >= 2) 

-- 

INSERT INTO Room(extendable, room_capacity, room_type, daily_rate, amenities, damages, associated_hotel_name, room_hotel_chain_id) 
VALUES (true, 10, 'mountain', 10.30, 'none', 'none', 'marriot atlanta', 2);

INSERT INTO Room(extendable, room_capacity, room_type, daily_rate, amenities, damages, associated_hotel_name, room_hotel_chain_id) 
VALUES (true, 10, 'riverside', 10.30, 'none', 'none', 'marriot atlanta', 1);

INSERT INTO Room(extendable, room_capacity, room_type, daily_rate, amenities, damages, room_hotel_chain_id) 
VALUES (true, 10, 'mountain', 10.30, 'many', 'none', 2);

INSERT INTO Hotel(hotel_name, manager, chain_phone_number, num_rooms, hotel_address, hotel_related_chain)
VALUES ('marriot atlanta', 'darren', '510938334', 10, 'atlanta', 'marriot inc');

INSERT INTO Hotel_chain(hotel_chain_id, email_address, num_associated_hotels, central_office_street_address, hotel_location, phone_number)
VALUES ( 'marriot inc', 'marriot@gmail.com', 20, 'atlanta georgia', 'atlanta st', '193774819'
);

INSERT INTO Employee(SSN, full_name, work_place_id, address) VALUES('1', 'Margo', 'marriot inc', 'elsewhere');