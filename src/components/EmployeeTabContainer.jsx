import { useState } from 'react'
import styled from 'styled-components'
import { EmployeeRemoveBooking } from './EmployeeRemoveBooking'
import { EmployeeAddBooking } from './EmployeeAddBooking'
import { EmployeeUpdateBooking } from './EmployeeUpdateBooking'
import { BookBookMarkIcon } from './icons/BookBookmarkIcon'
import { BuildingCircleCheckIcon } from './icons/BuildingCircleCheckIcon'
import { BuildingCircleArrowRightIcon } from './icons/BuildingCircleArrowRightIcon'
import { EmployeeAddNewRoom } from './EmployeeAddNewRoom'

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

const InnerText = styled.p`
font-weight: bold;
font-size: 14px;
`

const Container = styled.div`
align-items: center;
gap: 0.5rem;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
transition: 0.3s;
display: flex;
flex-direction: column;
width: 300px;
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
export const EmployeeTabContainer=()=>{

  const id = "EmployeeTabContainer"

  const [remove, setRemove] = useState(false);
  const [add, setAdd] = useState(false);
  const [update, setUpdate] = useState(false);
  const [addNewRoom, setAddNewRoom] = useState(false);

  const handleGoToRemoveBookings=()=>{
    setRemove(true)
  }
  const handleGoToAddBookings=()=>{
    setAdd(true)
  }

  const handleUpdateBookings=()=>{
    setUpdate(true)
  }

  const handleAddNewRoom=()=>[
    setAddNewRoom(true)
  ]

  const handleGoBack=()=>{
    (setUpdate(false));
    (setRemove(false));
    (setAdd(false));
    setAddNewRoom(false)
  }

  const handleGoManage=()=>{
    if(!update){
      // Order matters. I need to render the view I want and unrender the current view
      setRemove(false);
      handleUpdateBookings()
      setAdd(false)}
      setAddNewRoom(false)
  }
  const handleGoAdd=()=>{
    if(!add){
      (setUpdate(false))
      handleGoToAddBookings()
      setRemove(false)
      setAddNewRoom(false)
  }
  }

  const handleGoRemove=()=>{
    if(!remove){
      (setUpdate(false))
      handleGoToRemoveBookings()
      setAdd(false)
      setAddNewRoom(false)
  }
  }

    return(
      <div>
      {!remove && !add && !update && !addNewRoom &&(
        <div>
      <Text>What would you want to do today?</Text>
      <Grid>
        <Container>
          <Text> Manage Bookings</Text>
          <BuildingCircleArrowRightIcon/>
          <SubText>Search and remove bookings for a client</SubText>
          <InnerCard>
          <InnerText>Delete an existing booking for a client</InnerText>
          <SubmitButton
          onClick={handleGoToRemoveBookings}
          >Remove a booking</SubmitButton>
          </InnerCard>

        </Container>

        <Container  id={`${id}-addBookings-Container`}>
          <Text> Add Bookings</Text>
          <BuildingCircleCheckIcon/>
          <SubText>Add bookings</SubText>
          <InnerCard>
            <InnerText>Add a new booking for a client</InnerText>
          <SubmitButton
          onClick={handleGoToAddBookings}
          >Add a booking</SubmitButton>
          </InnerCard>
        </Container>

        <Container id={`${id}-updateBookings-Container`}>
        <Text> Check A Customer In</Text>
        <BookBookMarkIcon/>
        <SubText>Update arrival/departure date, location, hotel chain, booking type, etc.</SubText>
        <InnerCard>
        <InnerText>Update the reservation details for a client</InnerText>
        <SubmitButton
        onClick={handleUpdateBookings}>
          Update a booking
        </SubmitButton>
        </InnerCard>
        </Container>

        <Container id={`${id}-addRoom-Container`}>
        <Text>Add a Room</Text>
        <BookBookMarkIcon/>
        <SubText>Create a new Room for a Hotel Chain</SubText>
        <InnerCard>
        <InnerText>Add a new Room Availability for a client</InnerText>
        <SubmitButton
        onClick={handleAddNewRoom}>
          Create a New Room
        </SubmitButton>
        </InnerCard>
        </Container>

        </Grid>
        </div>
      ) }
      {remove && 
      <EmployeeRemoveBooking
      goAdd={handleGoAdd}
      goRemove={handleGoRemove}
      goManage ={handleGoManage} 
      goBack={handleGoBack}/>}
      {add && 
      <EmployeeAddBooking
        goAdd={handleGoAdd}
        goRemove={handleGoRemove}
        goManage ={handleGoManage} 
        goBack={handleGoBack}/>}
      {update && 
      <EmployeeUpdateBooking 
      goAdd={handleGoAdd}
      goRemove={handleGoRemove}
      goManage ={handleGoManage} 
      goBack={handleGoBack}/>}
      {addNewRoom && <EmployeeAddNewRoom
            goAdd={handleGoAdd}
            goRemove={handleGoRemove}
            goManage ={handleGoManage} 
            goBack={handleGoBack}
      
      />}
        </div>
    )
}