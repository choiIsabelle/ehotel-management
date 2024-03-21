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

const HotelOwnerNavigationButtons = ({handleClick, handleGoBack}) => {
  return (
    <NavigationContainer>
    <ButtonContainer>
        <c.NavigationButton
        onClick={()=>handleClick('add')}
        >
        Add new Chain
        </c.NavigationButton>

        <c.NavigationButton
        onClick={()=>handleClick('manage')}
        >
        Manage
        </c.NavigationButton>
        <c.NavigationButton
        onClick={()=>handleClick('addNewHotel')}
        >
        Add new Hotel
        </c.NavigationButton>
    </ButtonContainer>
        <GoBackButton
        onClick={()=> handleGoBack()}
        >Go Back</GoBackButton>
    </NavigationContainer>
  )
}

export default HotelOwnerNavigationButtons
