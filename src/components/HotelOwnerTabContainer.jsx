import { useState } from 'react'
import styled from 'styled-components'
import  {HotelOwnerModifyChain}  from './HotelOwnerModifyChain'
import {HotelOwnerAddChain} from './HotelOwnerAddChain'
import HotelOwnerNavigationButtons from './HotelOwnerNavigationButtons'

const Text = styled.h1`
padding: 1rem;
font-weight: bold;
font-size: 19px;
`

const Grid = styled.div`
flex-direction: row;
display: flex;
width: fit-content;
height: fit-content;
gap: 1rem
`

const SubText = styled.p`
`

const IconContainer=styled.div`
display: flex;
justify-content: center;
align-items: center;
`

const InnerText = styled.p`
font-weight: bold;
font-size: 14px;
`

const Container = styled.div`
gap: 0.5rem;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
transition: 0.3s;
display: flex;
flex-direction: column;
width: 350px;
height: 250;
padding: 2rem;
border-radius: 10px;
&.grow {
  transition: all .2s ease-in-out;

  &:hover {

  }
}


&:hover {
  background-position: left center;
  transform: scale(1.1);
}
`

const SubmitButton = styled.button`
background-image: linear-gradient(to right, #77A1D3 0%, #79CBCA  51%, #77A1D3  100%);
margin: 10px;
padding: 15px 45px;
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

&.grow {
    transition: all .2s ease-in-out;

    &:hover {

    }
  }


&:hover {
    background-position: left center;
    transform: scale(1.1);
  }
`

const InnerCard = styled.div`
margin-top: 1rem;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
background-color: #F1F1F2;
padding: 1rem;
gap: 0.5rem;
display: flex;
flex-direction: column;
`

export const HotelOwnerTabContainer=()=>{

  const [currentPage, setCurrentPage] =useState('')

  const [modify, setModify] = useState(false);
  const [add, setAdd] = useState(false);

  const handleGoToRemoveBookings=()=>{
    setModify(true)
  }
  const handleGoToAddBookings=()=>{
    setAdd(true)
  }

  const handleGoBack=()=>{
    setModify(false)
    setAdd(false)
  }

  const handleCurrentPage=(page)=>{
    if(page === 'add'){
      handleGoToAddBookings()
      setModify(false)
    }
    if(page === 'manage'){
      handleGoToRemoveBookings()
      setAdd(false)
    }
  }


    return(
      <div>
      {!modify && !add && (
        <div>
      <Text>What would you want to do today?</Text>
      <Grid>
        <Container>
          <Text> Manage Hotels</Text>
          <SubText>Remove, update, and view current hotel offerings</SubText>
          <InnerCard>
          <InnerText>View hotel offerings and modify them</InnerText>
          <SubmitButton
          onClick={handleGoToRemoveBookings}
          >Manage hotel offerings</SubmitButton>
          </InnerCard>

        </Container>

        <Container>
          <Text> Add Offerings</Text>
          <SubText>Add new offerings for clients using this view</SubText>
          <InnerCard>
            <InnerText>Add a new hotel offering</InnerText>
          <SubmitButton
          onClick={handleGoToAddBookings}
          >Add an Offering</SubmitButton>
          </InnerCard>
        </Container>

        </Grid>
        </div>
      ) }
      {(modify) && 
     <div> 
      <HotelOwnerModifyChain
      onGoBack={handleGoBack}
      />
      <HotelOwnerNavigationButtons
      handleGoBack={handleGoBack}
      handleClick={handleCurrentPage}
      ></HotelOwnerNavigationButtons>
      </div>
      }
      
      {(add) && <div>
      <HotelOwnerAddChain
      onGoBack={handleGoBack}
      />
      <HotelOwnerNavigationButtons
      handleGoBack={handleGoBack}
      handleClick={handleCurrentPage}
      ></HotelOwnerNavigationButtons>
      </div> 
      }
        </div>
    )
}