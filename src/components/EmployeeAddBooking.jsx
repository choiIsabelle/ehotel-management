import { EmployeeNavigationButtons } from "./EmployeeNavigationButtons"
import { EmployeeAddBookingAction } from "./EmployeeAddBookingAction"
import styled from 'styled-components'

const Container= styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
`
//TODO: this component needs to be renamed --> EmployeeAddbookingContainer, 'goManage' should be 'goUpdate'? or vice versa

export const EmployeeAddBooking=({goBack, goManage, goAdd, goRemove})=>{
    return(
        <Container>
            <EmployeeAddBookingAction></EmployeeAddBookingAction>
                    <button onClick={()=>goBack()}>Go back</button>
            <EmployeeNavigationButtons
                        handleUpdate={goManage}
                        handleAdd={goAdd}
                        handleRemove={goRemove}
            ></EmployeeNavigationButtons>
        </Container>
    )
}