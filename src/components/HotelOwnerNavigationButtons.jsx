import * as c from './CustomComponents'
import styled from 'styled-components'

const ButtonContainer = styled.div`
display: flex;
flex-direction: row;
margin-top: 1rem;
`

const GoBackButton = styled.button`
`

const NavigationContainer = styled.div`
display: flex;
flex-direction: column;
`

const HotelOwnerNavigationButtons = ({handleClick}) => {
  return (
    <NavigationContainer>
        <GoBackButton>Go Back</GoBackButton>
    <ButtonContainer>
        <c.NavigationButton
        onClick={()=>handleClick('add')}
        >
        Add
        </c.NavigationButton>

        <c.NavigationButton
        onClick={()=>handleClick('manage')}
        >
        Manage
        </c.NavigationButton>
    </ButtonContainer>
    </NavigationContainer>
  )
}

export default HotelOwnerNavigationButtons
