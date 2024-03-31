import { useState, useEffect } from 'react'
import * as c from './CustomComponents'
import { CondensedInput } from './CondensedInput'
import styled from 'styled-components'

const Card = styled.div`
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
transition: 0.3s;
display: flex;
flex-direction: column;
width: fit-content;
height: fit-content;
padding: 1rem;
margin-top: 0.5rem;
border-radius: 10px;
`

const Container = styled.div`
flex-direction: row;
display: flex;
flex-wrap: wrap;
gap: 0.5rem;
`

const ClientViewAllByArea = () => {
    const [hotelAddress, setHotelAddress] = useState('')
    const [hotelByAddressData, setHotelByAddressData] = useState([])

    const getAllRoomsByArea=async(hotel_address)=>{
      try {
          const response = await fetch(`http://localhost:5000/hotel/address/${hotel_address}`, {
              method: 'GET'
          });
          const jsonData = await response.json();
          setHotelByAddressData(jsonData)
          console.log(hotelByAddressData)
      } catch (error) {
          console.error(error.message);
      }
      }

      useEffect(()=>{
        getAllRoomsByArea(hotelAddress)
      }, [hotelAddress])

      const HotelsByAddress=()=>{
        return(
            hotelByAddressData.map(item=>(
                <p key={item.room_number}>
                    <Card>
                    <c.SearchButton><b>{item.associated_hotel_name}</b></c.SearchButton>
                <p><b>Room extendability: </b>{item.extendable? "Extendable" : "Not Extendable"}</p>
                <p><b>Room capacity:</b> {item.room_capacity}</p>
                <p><b>Room location:</b> {item.hotel_address}</p>
                <p><b>Room type:</b> {item.room_type}</p>
                <p><b>Daily rate:</b> {item.daily_rate}</p>
                <p><b>Damages:</b> {item.damages}</p>
                </Card>
                </p>
            ))
        )
      }

  return (
    <div>
        <Card>
            <CondensedInput
            valueLabel={hotelAddress}
            handleChange={e=>setHotelAddress(e.target.value)}
            msg={"What is the location that you would like to view the available rooms for?"}
            />
            <c.SearchButton onClick={()=>getAllRoomsByArea(hotelAddress)}>Search by Location</c.SearchButton>
        </Card>
            <Container>
            {hotelByAddressData && <HotelsByAddress/>}
            </Container>

      
    </div>
  )
}

export default ClientViewAllByArea
