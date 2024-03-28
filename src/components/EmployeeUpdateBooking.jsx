import { CondensedInput } from "./CondensedInput"
import { EmployeeNavigationButtons } from "./EmployeeNavigationButtons"
import styled from 'styled-components'
import * as c from './CustomComponents'

const Container= styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
`


export const EmployeeUpdateBooking=({goBack, goManage, goAdd, goRemove})=>{
    return(
        <Container>
        <c.Card id="EmployeeUpdateBooking-Container">
            <form>
        <CondensedInput
        title='Check in a Customer'
        msg="What is your SSN?"
        subMsg="Enter your SSN as an employee"
        />
        <CondensedInput
        msg="What is the Booking ID you are checking in for?"
        subMsg="Enter numeric booking ID"
        />
        <c.SearchButton>Check in Customer</c.SearchButton>
        </form>
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