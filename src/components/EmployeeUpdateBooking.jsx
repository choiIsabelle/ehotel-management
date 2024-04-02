import { CondensedInput } from "./CondensedInput"
import { useState } from "react"
import { EmployeeNavigationButtons } from "./EmployeeNavigationButtons"
import styled from 'styled-components'
import * as c from './CustomComponents'

const Container= styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
`

export const EmployeeUpdateBooking=({goBack, goManage, goAdd, goRemove})=>{
    const [employeeSSN, setEmployeeSSN] = useState('')
    const [bookingID, setBookingID] = useState('')

    const createRental=async()=>{
        try {
            const response = await fetch('http://localhost:5000/rental',{
                method: "POST",
                headers:{"Content-Type": "application/json"},
                body: JSON.stringify({
                    booking_id: bookingID, 
                    employee_SSN: employeeSSN
                })
            })
            console.log(response)
            alert("New Room Availability Added Successfully!")
            
        }  catch (error) {
            console.error("Adding a new rental could not be completed", console.error)
        }
    }

    const confirmPaymentDetails=async(id)=>{
        try {
            const response = await fetch(`http://localhost:5000/rental/:${id}`,{
                method: "UPDATE",
                headers:{"Content-Type": "application/json"},
                body: JSON.stringify({
                    booking_id: bookingID, 
                    employee_SSN: employeeSSN
                })
            })
            console.log(response)
            
        }  catch (error) {
            console.error(console.error)
        }
    }
    return(
        <Container>
        <c.Card id="EmployeeUpdateBooking-Container">
        <CondensedInput
        title='Check in a Customer'
        msg="What is your SSN?"
        subMsg="Enter your SSN as an employee"
        valueLabel={employeeSSN}
        handleChange={(e)=>setEmployeeSSN(e.target.value)}
        />
        <CondensedInput
        msg="What is the Booking ID you are checking in for?"
        subMsg="Enter numeric booking ID"
        valueLabel={bookingID}
        handleChange={(e)=>setBookingID(e.target.value)}
        />
        <c.SearchButton onClick={()=>createRental()}>Check in Customer</c.SearchButton>
            </c.Card>

            <c.Card>

            <CondensedInput
        title='Insert customer payment details'
        msg="What is the customer's credit card information?"
        subMsg="Enter a credit card number"
        valueLabel={employeeSSN}
        handleChange={(e)=>setEmployeeSSN(e.target.value)}
        />
               <c.SearchButton onClick={()=>confirmPaymentDetails()}>Confirm Payment Details</c.SearchButton>
            </c.Card>
        <button style={{borderColor: 'black', marginTop:'1rem'}} onClick={()=>goBack()}>Go back</button>
            <EmployeeNavigationButtons
            handleManage={goManage}
            handleAdd={goAdd}
            handleRemove={goRemove}
            ></EmployeeNavigationButtons>
            </Container>
    )
}