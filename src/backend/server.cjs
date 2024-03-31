/* eslint-disable no-undef */
const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db.cjs");
const port ='5000'

app.use(cors());
app.use(express.json());

// add a new customer 
app.post("/customer", async (req, res) => {
  try {
    const { SSN, full_name, date_of_registration, address, credit_card_number } = req.body;
    console.log(SSN, full_name, date_of_registration, address, credit_card_number);

    const newCustomer = await pool.query(
      "INSERT INTO customer (ssn, full_name, date_of_registration, address, credit_card_number) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [SSN, full_name, date_of_registration, address, credit_card_number ]
    );
    await pool.query('COMMIT');
    res.json(newCustomer.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

// update customer name based on SSN
app.put("/customer/:id", async (req, res)=>{
  try{
    const {id} = req.params;
    const {full_name} = req.body;
    const updatedCustomer = await pool.query(
      "UPDATE customer SET full_name = $1 WHERE SSN = $2 RETURNING*",
      [full_name, id]
    );
    await pool.query('COMMIT');
    if(updatedCustomer.rows.length ===0){
      return res.status(404).json({error: "Customer not found, SSN does not correlate with any customer in the database"});
    }
    res.json(updatedCustomer.rows[0]);
  }
  catch(error){
    console.error(error.message);
    res.status(500).json({error: "Internal server error"});
  }
})

// update customer address based on SSN
app.put("/customer/address/:id", async(req,res)=>{
  try {
    const {id} = req.params;
    const {address} = req.body;
    const updatedCustomer = await pool.query(
      "UPDATE customer SET address = $1 WHERE SSN =$2 RETURNING*",
      [address, id]
    );
    await pool.query('COMMIT');
    if(updatedCustomer.rows.length ===0){
      return res.status(404).json({error: "Customer not found, SSN does not correlate with any customer in the database"});
    }
    res.json(updatedCustomer.rows[0]);
  } catch (error) {
    console.log(error.message)
    
  }
})

// get customer information 
app.get("/customer/:id", async(req, res)=>{
  try{
    const { id } = req.params;
    const getCustomer = await pool.query("SELECT full_name, address, credit_card_number FROM customer WHERE SSN = $1", [id]);
    res.json(getCustomer)
    console.log(getCustomer);
  }catch(error){
    console.error(error.message);
  }
})

// update customer credit card number
app.post("/customer/credit_card_number/:id", async(req,res)=>{
  try {
    const { id } = req.params;
    const { credit_card_number } = req.body;
    const updateCustomerPaymentDetails = await pool.query("UPDATE customer SET credit_card_number = $1 WHERE SSN = $2 RETURNING*", [id, credit_card_number])
    const result = res.json(updateCustomerPaymentDetails) 
    console.log(result)
  } catch (error) {
    console.error("An error has occurred when attempting to update the customer credit card number", error.message)
    
  }
})

// delete a customer
app.delete("/customer/:id", async(req,res)=>{
  try {
    const {id} = req.params;
    const deleteCustomerById= await pool.query("DELETE FROM customer WHERE SSN =$1 RETURNING *", [id])
    res.json(deleteCustomerById.rows)
  } catch (error) {
    console.error("An error has occurred when attempting to delete a customer", error.message)
  }
})

// add new hotel chain
app.post("/Hotel_chain", async (req, res) => {
  try {
    const { manager, chain_phone_number, num_rooms, hotel_address, hotel_chain_name, hotelChainId } = req.body;
    console.log( manager, chain_phone_number, num_rooms, hotel_address, hotel_chain_name, hotelChainId);

    const newHotelChain = await pool.query(
      "INSERT INTO Hotel_chain (manager, chain_phone_number, num_rooms, hotel_address, hotel_chain_name, hotelChainId ) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [manager, chain_phone_number, num_rooms, hotel_address, hotel_chain_name, hotelChainId ]
    );
    await pool.query('COMMIT');
    res.json(newHotelChain.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

// update a hotel chain
app.post("/hotel_chain/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { email_address, num_associated_hotels, central_office_street_address, hotel_location, phone_number } = req.body;
    const updateHotelChainById = await pool.query("UPDATE hotel SET email_address=$1, num_associated_hotels=$2, central_office_street_address=$3, hotel_location=$4, phone_number=$5 WHERE hotel_chain_id=$7 RETURNING *", 
    [ email_address, num_associated_hotels, central_office_street_address, hotel_location, phone_number, id]);
    await pool.query('COMMIT');
    res.json(updateHotelChainById.rows[0]);
  } catch (error) {
    console.error("An error has occurred when attempting to update the hotel details:", error);
    res.status(500).send("An error occurred while updating the hotel details.");
  }
});

// delete a hotel chain

// get all hotel chains
app.get('/hotel_chain', async(req,res)=>{
  try{
    const getHotelChains = await pool.query(
      "SELECT hotel_chain_id from hotel_chain"
    );
    res.json(getHotelChains.rows)
  }catch(error){
    console.error(error.message);
  }
})


// add a hotel
app.post("/Hotel", async(req,res)=>{
  try {
    const{ hotelId, email_address, num_associated_hotels, central_office_street_address, central_office_address, phone_number} = req.body;
    const newHotel = await pool.query(
      "INSERT INTO Hotel(hotelId, email_address, num_associated_hotels, central_office_street_address, central_office_address, phone_number) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [hotelId, email_address, num_associated_hotels, central_office_street_address, central_office_address, phone_number]
    )
    await pool.query("COMMIT");
    res.json(newHotel.rows[0]);
    
  } catch (error) {
    console.log(error.message, "Could not add new Hotel to Hotel database")
    
  }
})

// get a hotel's aggregate room capacity by its name
app.get("/hotel/by_name/:hotel_name", async (req, res) => {
  try {
    const { hotel_name } = req.params;
    const getHotelCapacityByName = await pool.query(`
    SELECT hotel.hotel_name, SUM(room.room_capacity) AS total_capacity 
    FROM hotel 
    JOIN room ON room.room_hotel_chain_id = hotel.hotel_id 
    WHERE hotel.hotel_name = $1 
    GROUP BY hotel.hotel_name
    `, [hotel_name]);
    console.log("called get a hotel's aggregate room capacity by its name")
    res.json(getHotelCapacityByName.rows);
  } catch (error) {
    console.error( error.message);
  }
});


// get all rooms in a specific location
app.get("/hotel/address/:hotel_address", async(req, res)=>{
  try{
    const { hotel_address } = req.params;
    const getRoomByLocation = await pool.query(`SELECT * FROM room 
    JOIN hotel ON room.room_hotel_chain_id = hotel.hotel_id 
    WHERE hotel.hotel_address = $1;
    `, [hotel_address]);
    res.json(getRoomByLocation.rows)
  }catch(error){
    console.error(error.message);
  }
})

// get all hotels and their aggregated capacity
app.get("/hotel/total_capacity", async (req, res) => {
  try {
    const getAllHotelCapacity = await pool.query(`
    SELECT hotel.hotel_name, SUM(room.room_capacity) AS total_capacity 
    FROM hotel 
    JOIN room ON room.room_hotel_chain_id = hotel.hotel_id 
    GROUP BY hotel.hotel_name
    `,);
    res.json(getAllHotelCapacity.rows);
    console.log('here!!!', getAllHotelCapacity.rows);
  } catch (error) {
    console.error(error.message);
  }
});

// update a hotel 
app.post("/hotel/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { hotel_name, manager, chain_phone_number, num_rooms, hotel_address, hotel_related_chain } = req.body;
    const updateHotelById = await pool.query("UPDATE hotel SET hotel_name=$1, manager=$2, chain_phone_number=$3, num_rooms=$4, hotel_address=$5, hotel_related_chain=$6 WHERE hotel_id=$7 RETURNING *", 
    [hotel_name, manager, chain_phone_number, num_rooms, hotel_address, hotel_related_chain, id]);
    await pool.query('COMMIT');
    res.json(updateHotelById.rows[0]);
  } catch (error) {
    console.error("An error has occurred when attempting to update the hotel details:", error);
    res.status(500).send("An error occurred while updating the hotel details.");
  }
});

// delete a hotel
app.delete("/hotel/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteHotelById = await pool.query("DELETE FROM hotel WHERE hotel_id=$1 RETURNING *", [id]);
    await pool.query('COMMIT');
    if (deleteHotelById.rows.length === 0) {
      return res.status(404).json({ message: "Hotel not found." });
    }
    res.json({ message: "Hotel deleted successfully.", deletedHotel: deleteHotelById.rows[0] });
  } catch (error) {
    console.error("An error has occurred when attempting to delete the hotel:", error);
    res.status(500).send("An error occurred while deleting the hotel.");
  }
});


// add a room
app.post("/room", async(req,res)=>{
  try {
    const{ extendable, room_capacity, room_type, daily_rate, amenities, damages, room_hotel_chain_id} = req.body;
    const newRoom = await pool.query(
      "INSERT INTO room (extendable, room_capacity, room_type, daily_rate, amenities, damages, room_hotel_chain_id) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [extendable, room_capacity, room_type, daily_rate, amenities, damages, room_hotel_chain_id]
    )
    await pool.query("COMMIT");
    res.json(newRoom.rows[0]);
    
  } catch (error) {
    console.log(error.message, "Could not add new Room to Room database")
    
  }
})

// get all rooms, and also their location
app.get("/room", async(req, res)=>{
  try{
    const getRoom = await pool.query(
      "SELECT room.*, hotel.hotel_address FROM room INNER JOIN hotel ON room.associated_hotel_name = hotel.hotel_name"
    );
    res.json(getRoom)
  }catch(error){
    console.error(error.message);
  }
})


// get room information based on room_number (primary key)
app.get("/room/:id", async(req, res)=>{
  try{
    const { id } = req.params;
    const getRoomById = await pool.query("SELECT * FROM room WHERE room_number = $1", [id]);
    res.json(getRoomById)
    console.log(getRoomById);
  }catch(error){
    console.error(error.message);
  }
})

// get rooms based on customer preferences
app.get("/hotel/by_specifications", async (req, res) => {
  try {
      const { room_capacity, hotel_address, hotel_related_chain } = req.query;
      const getHotelByPreferences = await pool.query(`
          SELECT room.* 
          FROM hotel 
          JOIN room ON hotel.hotel_id = room.room_hotel_chain_id 
          WHERE room.room_capacity = $1 
          AND hotel.hotel_address = $2
          AND hotel.hotel_related_chain = $3;
      `, [ room_capacity, hotel_address, hotel_related_chain ]);
      res.json(getHotelByPreferences.rows);
      console.log('here!!!', getHotelByPreferences.rows);
  } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
  }
});






// update a room
app.post("/room:id", async(req,res)=>{
  try {
    const { id } = req.params;
    const { extendable, room_capacity, room_type, daily_rate, amenities, damages, associated_hotel_name, room_hotel_chain_id } = req.body;
    const updateRoomById = await pool.query("UPDATE room SET extendable, room_capacity, room_type, daily_rate, amenities, damages, associated_hotel_name, room_hotel_chain_id = $1,$2,$3,$4,$5,$6,$7,$8 WHERE room_id = $9 RETURNING*", 
    [id, extendable, room_capacity, room_type, daily_rate, amenities, damages, associated_hotel_name, room_hotel_chain_id])
    const result = res.json(updateRoomById) 
    console.log(result)
  } catch (error) {
    console.error("An error has occurred when attempting to update the customer credit card number", error)
  }
})

// delete a room


// add a booking
app.post("/booking", async(req, res)=>{
  try {
    const {
      customer_SSN,
      employee_SSN,
      is_a_rental,
      departure_date,
      arrival_date,
      room_of_booking
  } = req.body;

    const addBooking = await pool.query(
      "INSERT INTO Booking(customer_SSN, employee_SSN, is_a_rental, departure_date, arrival_date, room_of_booking) VALUES ($1, $2, $3, $4, $5, $6) RETURNING*",
      [customer_SSN, employee_SSN, is_a_rental, departure_date, arrival_date, room_of_booking]
    )
    await pool.query("COMMIT");
    res.json(addBooking.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
})


// add to booking archive


// delete from booking archive


app.listen(5000, ()=>{
  console.log(`Server has started on port ${port}`)
})