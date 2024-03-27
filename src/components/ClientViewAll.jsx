import styled from 'styled-components';
import {useState, useEffect} from 'react';
import { ClientGoBackChevronButton } from './ClientChevronLeftButton';

const Card = styled.div`
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
transition: 0.3s;
display: flex;
flex-direction: column;
text-align: left;
width: fit-content;
height: fit-content;
padding: 1rem;
margin-top: 1rem;
border-radius: 10px;
`
const SearchButton = styled.button`
background-image: linear-gradient(to right, #77A1D3 0%, #79CBCA  51%, #77A1D3  100%);
padding: 0.6rem;
margin-top: 0.3rem;
text-align: center;
text-transform: uppercase;
transition: 0.5s;
background-size: 200% auto;
color: white;            
box-shadow: 0 0 20px #eee;
border-radius: 10px;
width: fit-content;
text-decoration: none;
background-position: right center;

&:hover {
    background-position: left center;

  }
`
const ClientViewAll = () => {
    const [rooms, setRooms] = useState([]);

    // HTTP request to GET all rows from Room table
    const getRooms = async () => {
        try {
            const response = await fetch('http://localhost:5000/room', {
                method: 'GET'
            });
            const jsonData = await response.json();        
            setRooms(jsonData.rows);
        } catch (error) {
            console.error(error.message);
        }
    };

    useEffect(() => {
        getRooms();
    }, []);

    const onRoomSelect=(roomId)=>{
        alert("Selected for booking!")
        //TODO: create booking object
    }


    const allRooms = rooms.map(item=>(
        <p key={item.room_hotel_chain_id}>
            <Card>
                <p><b>Hotel Name:</b> {item.associated_hotel_name}</p>
                <p><b>Room extendability:</b> {item.extendable}</p>
                <p><b>Room capacity:</b> {item.room_capacity}</p>
                <p><b>Room location:</b> {item.hotel_address}</p>
                <p><b>Room type:</b> {item.room_type}</p>
                <SearchButton onClick={()=>onRoomSelect(item.room_number)}>Select this room</SearchButton>
            </Card>
        </p>
    ))

    return (
        <div>
            <ClientGoBackChevronButton/>
            {allRooms.length > 0 && allRooms}
        </div>
    );
};

export default ClientViewAll;
