import styled from 'styled-components'
import { CondensedInput } from './CondensedInput'
import { useState, useRef } from 'react'
import { RadioButton } from './RadioButton'

const Container = styled.div`
margin-top: 2rem;
flex-direction: column;
display: flex;
gap: 0.1rem;
padding: 1rem;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
`

const SubmitButton = styled.button`
margin-top: 1rem;
background-image: linear-gradient(to right, #77A1D3 0%, #79CBCA  51%, #77A1D3  100%);
padding: 0.5rem;
text-align: center;
text-transform: uppercase;
transition: 0.5s;
background-size: 200% auto;
color: white;            
box-shadow: 0 0 20px #eee;
border-radius: 10px;
display: block;
text-decoration: none;
background-position: right center;

&:hover {
    background-position: left center;
  }
`

export const EmployeeAddBookingAction=()=>{
    const radioButtonRef = useRef(null); 

    const [customerName, setCustomerName] = useState("SSN")
    const [arrivalDate, setArrivalDate] = useState("yyyy-mm-dd")
    const [departureDate, setDepartureDate] =useState("yyyy-mm-dd")
    const [selectedValue, setSelectedValue] = useState(null);
    const[roomNumber, setRoomNumber] = useState('')
    const[employeeSSN, setEmployeeSSN] = useState('')
    const[rentalPrice, setRentalPrice] = useState('This is for rentals only')

    const radioHandleCheck = (value) => {
        setSelectedValue(value);
      };

      const createNewReservation=()=>{
        if(selectedValue == 'Booking'){
            createNewBooking()
        }
        createNewRental()
      }

      const createNewRental=async()=>{
        try {
            const response = await fetch('http://localhost:5000/rental',{
                method: "POST",
                headers:{"Content-Type": "application/json"},
                body: JSON.stringify({
                    customer_SSN: customerName,
                    employee_SSN: employeeSSN, 
                    departure_date: departureDate, 
                    arrival_date: arrivalDate, 
                    price: rentalPrice,
                    room_of_booking: roomNumber})
            })
            console.log(response)
            alert("New Rental Added Successfully!")
            
        }  catch (error) {
            alert("Something went wrong in adding a new rental")
            console.error("Adding a new rental could not be completed", console.error)
            
        }

      }

      const createNewBooking=async()=>{
        try {
            const response = await fetch('http://localhost:5000/booking',{
                method: "POST",
                headers:{"Content-Type": "application/json"},
                body: JSON.stringify({
                    customer_SSN: customerName,
                    employee_SSN: employeeSSN, 
                    departure_date: departureDate, 
                    arrival_date: arrivalDate, 
                    room_of_booking: roomNumber})
            })
            console.log(response)
            alert("New Booking Added Successfully!")
            
        }  catch (error) {
            alert("Something went wrong in adding a new booking")
            console.error("Adding a new booking could not be completed", console.error)
            
        }
      }

    return(
        <Container>

            <CondensedInput
            title="Enter new booking details"
            msg={"Enter the customer's SSN"}
            subMsg="Enter an 8-digit number"
            valueLabel={customerName}
            handleClick={()=>setCustomerName('')}
            handleChange={(e)=>setCustomerName(e.target.value)}
            ></CondensedInput>
             <CondensedInput
            msg={"Enter your employee SSN"}
            valueLabel={employeeSSN}
            handleClick={()=>setEmployeeSSN('')}
            handleChange={(e)=>setEmployeeSSN(e.target.value)}
            ></CondensedInput>

            <CondensedInput
            msg={"What is the arrival date?"}
            valueLabel={arrivalDate}
            handleClick={()=>setArrivalDate('')}
            handleChange={(e)=>setArrivalDate(e.target.value)}
            ></CondensedInput>
            <CondensedInput
            msg={"What is the departure date?"}
            valueLabel={departureDate}
            handleClick={()=>setDepartureDate('')}
            handleChange={(e)=>setDepartureDate(e.target.value)}
            ></CondensedInput>

            <CondensedInput
            msg={"What is the Room of booking?"}
            valueLabel={roomNumber}
            handleChange={(e)=>setRoomNumber(e.target.value)}
            subMsg="Enter the room number associated with this booking"
            ></CondensedInput>
            <CondensedInput
            msg={"For rentals: What is the rental price?"}
            valueLabel={rentalPrice}
            onClick={(e)=>setRentalPrice('')}
            handleChange={(e)=>setRentalPrice(e.target.value)}
            subMsg="Enter the room number associated with this booking"
            ></CondensedInput>

            <RadioButton
            options={[
                "Booking",
                "Rental"
            ]}
            radioCheck={radioHandleCheck}
            radioButtonRef={radioButtonRef}
            radioTitle={"What type of reservation is this?"}
            ></RadioButton>

            <SubmitButton onClick={()=>createNewReservation()}>Submit</SubmitButton>
        </Container>
    )
}