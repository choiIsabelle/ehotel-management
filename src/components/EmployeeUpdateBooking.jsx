import { CondensedInput } from "./CondensedInput"
import { EmployeeNavigationButtons } from "./EmployeeNavigationButtons"
import styled from 'styled-components'

const Container= styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
`



export const EmployeeUpdateBooking=({goBack, goManage, goAdd, goRemove})=>{
    return(
        <Container>
            <form>
        <div>Update booking</div>
        <CondensedInput/>
        </form>
        <button onClick={()=>goBack()}>Go back</button>
            <EmployeeNavigationButtons
            handleManage={goManage}
            handleAdd={goAdd}
            handleRemove={goRemove}
            ></EmployeeNavigationButtons>
        </Container>
    )
}