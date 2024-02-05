import styled from 'styled-components'
import { CondensedInput } from './CondensedInput'
import { useState } from 'react'

const Container = styled.div`
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

    const [customerName, setCustomerName] = useState("SSN")
    const [date, setDate] = useState("yyyy-mm-dd")

    return(
        <form>
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
            msg={"What is the check-in date?"}
            valueLabel={date}
            subMsg="Enter an 8-digit number"
            handleClick={()=>setDate('')}
            handleChange={(e)=>setDate(e.target.value)}
            ></CondensedInput>

            <CondensedInput
            msg={"What is the Employee name?"}
            subMsg="Enter the employee name to be associated with this booking"
            ></CondensedInput>
    
            <CondensedInput
            msg={"What is the Employee SSN?"}
            subMsg="Enter the employee SSN to be associated with this booking"
            ></CondensedInput>

            <SubmitButton>Submit</SubmitButton>
        </Container>
        </form>
    )
}