import { EmployeeNavigationButtons } from "./EmployeeNavigationButtons"
import styled from 'styled-components'

const Container= styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
`


export const EmployeeAddBooking=({goBack, goManage, goAdd, goRemove})=>{
    return(
        <Container>Add a booking
                    <button onClick={()=>goBack()}>Go back</button>
            <EmployeeNavigationButtons
                        handleUpdate={goManage}
                        handleAdd={goAdd}
                        handleRemove={goRemove}
            ></EmployeeNavigationButtons>
        </Container>
    )
}