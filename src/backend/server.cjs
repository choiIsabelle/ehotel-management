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
    console.error("An error has occurred when attempting to update the customer credit card number", error)
    
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

// delete a hotel chain

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

// update a hotel 

// delete a hotel

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

// update a room

// delete a room


app.listen(5000, ()=>{
  console.log(`Server has started on port ${port}`)
})