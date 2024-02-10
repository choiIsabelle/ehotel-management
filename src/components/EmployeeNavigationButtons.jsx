import styled from 'styled-components'
const Container = styled.div`
display: flex;
flex-direction: row;
gap: 0.5rem;
`

const StyledButton = styled.button`
font-size: 13px;
display: block;
width: 100%;
border-color: black;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
&.grow {
    transition: all .2s ease-in-out;

    &:hover {

    }
  }
&:hover {
    background-position: left center;
    transform: scale(1.1);
    background-color: #f3f6f4;
  }

`

export const EmployeeNavigationButtons=({handleRemove, handleUpdate, handleAdd})=>{
    return(
        <Container>
            <StyledButton onClick={handleRemove}>Remove</StyledButton>
            <StyledButton  onClick={handleUpdate}>Update</StyledButton>
            <StyledButton  onClick={handleAdd}>Add</StyledButton>
        </Container>

    )
}