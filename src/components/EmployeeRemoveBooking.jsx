import { EmployeeNavigationButtons } from "./EmployeeNavigationButtons"
import styled from 'styled-components'
import * as c from './CustomComponents'
import { CondensedInput } from "./CondensedInput"

const Container= styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
`

function NavigationButtons({goBack, goManage, goAdd, goRemove}){
    return(
    <>
    <button style={{borderColor: 'black'}} onClick={()=>goBack()}>Go back</button>
    <EmployeeNavigationButtons
                handleUpdate={goManage}
                handleAdd={goAdd}
                handleRemove={goRemove}
    ></EmployeeNavigationButtons>
    </>
    )
}


export const EmployeeRemoveBooking=({goBack, goManage, goAdd, goRemove})=>{
    return(
        <Container id="EmployeeRemoveBooking-Container">
            <c.Card>
            <CondensedInput
            title="Remove a booking by name"
            msg="Search for an existing booking"
            subMsg='Input the reservation id'
            >
            </CondensedInput>
            <c.SearchButton>Search for a reservation</c.SearchButton>
            </c.Card>


            <NavigationButtons
            id="EmployeeRemoveBooking-NavigationButtons"
           goBack={goBack}
           goManage={goManage}
           goAdd={goAdd}
           goRemove={goRemove}
            />
        </Container>
    )
}