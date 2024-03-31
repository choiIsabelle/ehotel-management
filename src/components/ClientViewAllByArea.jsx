import { useState } from 'react'
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
margin-top: 1rem;
border-radius: 10px;
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

      const HotelsByAddress=()=>{
        return(
            hotelByAddressData.map(item=>(
                <p key={item.room_number}>
                    <Card>{item.room_number}</Card>
                </p>
            ))
        )
      }

  return (
    <div>
        <c.Card>
            <CondensedInput
            valueLabel={hotelAddress}
            handleChange={e=>setHotelAddress(e.target.value)}
            msg={"What is the location that you would like to view the available rooms for?"}
            />
            <c.SearchButton onClick={()=>getAllRoomsByArea(hotelAddress)}>Search by Location</c.SearchButton>
            {hotelByAddressData && <HotelsByAddress/>}

        </c.Card>
      
    </div>
  )
}

export default ClientViewAllByArea
