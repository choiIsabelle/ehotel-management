import * as c from './CustomComponents'
import styled from 'styled-components'

const ButtonContainer = styled.div`
display: flex;
flex-direction: row;
margin-top: 1rem;
gap: 0.5rem;
`

const GoBackButton = styled.button`
margin-top:1rem;
border-color: black;

`

const NavigationContainer = styled.div`
display: flex;
margin-top: 1rem;
flex-direction: column;
`

const ClientNavigationButtons = ({handleClick, handleGoBack}) => {
  return (
    <NavigationContainer className='ClientNavigationButtons'>
    <ButtonContainer>
        <c.NavigationButton
        className='clientNavigation-btn-add'
        onClick={()=>handleClick('add')}
        >
        Add Booking
        </c.NavigationButton>

        <c.NavigationButton
        className='clientNavigation-btn-update'
        onClick={()=>handleClick('update')}
        >
        Update User Details
        </c.NavigationButton>
    </ButtonContainer>
        <GoBackButton
        onClick={()=> handleGoBack()}
        >Go Back</GoBackButton>
    </NavigationContainer>
  )
}

export default ClientNavigationButtons;
