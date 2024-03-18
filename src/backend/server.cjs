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

// add new hotel chain
app.post("./Hotel_chain", async(req, res)=>{
  try {
    const {description} = req.body;
    console.log(description);
    const newHotelChain = await pool.query("INSERT INTO Hotel_chain (description) VALUES($1) RETURNING*", [description])
    await pool.query('COMMIT')
    res.json(newHotelChain);
    
  } catch (error) {
    console.error("Error occurred when adding to table Hotel_chain", error.message)
    
  }
})

// update a hotel chain

// delete a hotel chain

// add a hotel

// update a hotel 

// delete a hotel

// add a room

// update a room

// delete a room


app.listen(5000, ()=>{
  console.log(`Server has started on port ${port}`)
})