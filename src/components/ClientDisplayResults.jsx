import styled from 'styled-components'
import { useState, useEffect } from 'react'
import * as c from './CustomComponents'

const Card = styled.div`
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
transition: 0.3s;
display: flex;
flex-direction: column;
width: fit-content;
height: fit-content;
padding: 1rem;
margin-top: 2rem;
margin-left: 2rem;
border-radius: 10px;
`

export const ClientDisplayResults=({clientPreferences})=>{

    const [arrivalDate, setArrivalDate] = useState(clientPreferences[0].arrivalDate)
    const [departureDate, setDepartureDate] = useState(clientPreferences[0].departureDate)
    const roomCapacity = clientPreferences[1].props[0]
    const hotelAddress= clientPreferences[1].props[1]
    const hotelChain = clientPreferences[1].props[2]
    const hotelCategory = clientPreferences[1].props[3]
    const upperPrice = clientPreferences[1].props[5]
    const lowerPrice = clientPreferences[1].props[6]

    const [roomData, setRoomData] = useState([])
    const roomsBySpecifications = []

    useEffect(() => {
        const getRoomsByPreference = async () => {
            try {
                const response = await fetch(`http://localhost:5000/hotel/by_specifications?room_capacity=${roomCapacity}&hotel_address=${hotelAddress}&hotel_related_chain=${hotelChain}`);
                const jsonData = await response.json();
                console.log(jsonData)
                setRoomData(jsonData);
            } catch (error) {
                console.error(error.message);
            }
        };
        getRoomsByPreference();
    }, [roomCapacity, hotelAddress, hotelChain]);

    console.log(roomData)

    const roomsByData = roomData.map((item)=>(
        <p key={item.room_number}>
            <Card>
            <p><b>Hotel Name: </b>{item.associated_hotel_name}</p>
            <p><b>Area: </b>{item.room_type}</p>
            <p><b>Extendable: </b>{item.room_type? "Can add another bed" : "Cannot add another bed"}</p>
            <p><b>Daily rate: </b>{item.daily_rate}</p>
            <p><b>Amenities: </b>{item.amenities}</p>
            <p><b>Damages: </b>{item.damanges}</p>
            <c.SearchButton>Select this Hotel</c.SearchButton>
            </Card>
        </p>

    ))
    

    return(
        <div>
            <c.Title>View the results of your search!</c.Title>
            {roomsByData.length>0 && roomsByData}
            </div>
    )
}