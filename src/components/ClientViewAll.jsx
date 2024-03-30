import styled from 'styled-components';
import {useState, useEffect, useRef} from 'react';
import { ClientGoBackChevronButton } from './ClientChevronLeftButton';
import Modal from 'react-modal';
import {CondensedInput} from './CondensedInput'

const Card = styled.div`
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
transition: 0.3s;
display: flex;
flex-direction: column;
text-align: left;
width: 220px;
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
width: 100%
text-decoration: none;
background-position: right center;
&:hover {
    background-position: left center;

  }
`

  const Text = styled.span`
  font-size: 17px;
  text-align: center;
  font-weight: bold;
  `

  const SubContainer = styled.div`
  flex-direction: column;
  display: flex;
  gap: 0.5rem;
  `
const Container = styled.div`
flex-direction: row;
display: flex;
flex-wrap: wrap;
gap: 0.5rem;
`

const customModalStyles = {
    content: {
      width: '300px',
      height: 'fit-content',
      overflow: 'hidden',
      margin: 'auto',
      marginTop: '15%',
      backgroundColor: 'white'
    },
  };
  

const ClientViewAll = ({handleGoBack}) => {
    const [rooms, setRooms] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [roomData, setRoomData] = useState([])
    const [selectedRoomId, setSelectedRoomId] = useState([])
    const [customerSSN, setCustomerSSN] = useState();
    const [employeeSSN, setEmployeeSSN] = useState();
    const [arrivalDate, setArrivalDate] = useState();
    const [departureDate, setDepartureDate] = useState();

    const customerSSNRef = useRef(null);
    const employeeSSNRef = useRef(null);
    const arrivalDateRef = useRef(null);
    const departureDateRef = useRef(null);

    const ClientConfirmationModal=({ isOpen, onRequestClose, message, subMessage })=>{
        return (
            <Modal 
            isOpen={isOpen} 
            onRequestClose={onRequestClose}
            style={customModalStyles}
            >
              <SubContainer>
                <Text>{message}</Text>
                <p>{subMessage}</p>
                <CondensedInput
                              ref={customerSSNRef}
                handleChange={(e)=>setCustomerSSN(e.target.value)}
                valueLabel={customerSSN}
                title="Enter additional details"
                msg="What is your SSN?"
                subMsg="Associate your booking with your SSN"
                />
                <CondensedInput
                ref={employeeSSNRef}
                handleChange={(e)=>setEmployeeSSN(e.target.value)}
                valueLabel={employeeSSN}
                msg="What is the employee's SSN?"
                subMsg="Associate an employee with the booking using their SSN"
                />
                <CondensedInput
                ref={arrivalDateRef}
                handleChange={(e)=>setArrivalDate(e.target.value)}
                valueLabel={arrivalDate}
                msg="What is your arrival date?"
                subMsg="Associate an employee with the booking using their SSN"
                />
                <CondensedInput
               ref={departureDateRef}
                handleChange={(e)=>setDepartureDate(e.target.value)}
                valueLabel={departureDate}
                msg="What is your departure date?"
                subMsg="Associate an employee with the booking using their SSN"
                />
                <SearchButton onClick={()=>onRequestClose()}>Confirm Booking</SearchButton>
              </SubContainer>
            </Modal>
          );
    }

    const handleCloseModal=()=>{
        setIsModalOpen(false);
        confirmBooking(selectedRoomId)
    }
    
    const onRoomSelect=(id)=>{
        setIsModalOpen(true)
        setSelectedRoomId(id)
      }

    // HTTP request to GET all rows from Room table
    const getRooms = async () => {
        try {
            const response = await fetch('http://localhost:5000/room', {
                method: 'GET'
            });
            const jsonData = await response.json();        
            setRooms(jsonData.rows);
            console.log(jsonData.rows)

        } catch (error) {
            console.error(error.message);
        }
    };

    useEffect(() => {
        getRooms();
    }, []);
    
    
    // HTTP request to get specific room based on its room number
    const getRoomById = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/room/${id}`, {
                method: 'GET'
            });
            const jsonData = await response.json();        
            setRoomData(jsonData.rows[0]);
        } catch (error) {
            console.error(error.message);
        }
    };

    // HTTP request to make a new booking
    const confirmBooking= async(id)=>{
        await getRoomById(id)
        try {
            const response = await fetch(`http://localhost:5000/booking`, {
                method:"POST",
                headers:{"Content-Type": "application/json"},
                body: JSON.stringify({
                    customer_SSN: customerSSN, 
                    employoee_SSN: employeeSSN, 
                    is_a_rental: false,
                    departure_date: departureDate, 
                    arrival_date: arrivalDate, 
                    room_of_booking: roomData.room_number
                })
            })
            
            if(response.ok){
                alert("Successfully booked!")
            }
            console.log(response)
        } catch (error) {
            alert("Booking succesfully added!")
            console.error(error.message)
        }
    }


    const allRooms = rooms.map(item=>(
        <p key={item.room_hotel_chain_id}>
            <Card>
                <SearchButton><b>{item.associated_hotel_name}</b></SearchButton>
                <p><b>Room extendability: </b>{item.extendable? "Extendable" : "Not Extendable"}</p>
                <p><b>Room capacity:</b> {item.room_capacity}</p>
                <p><b>Room location:</b> {item.hotel_address}</p>
                <p><b>Room type:</b> {item.room_type}</p>
                <p><b>Daily rate:</b> {item.daily_rate}</p>
                <p><b>Damages:</b> {item.damages}</p>
                <SearchButton onClick={()=>onRoomSelect(item.room_number)}>Select this room</SearchButton>
            </Card>
        </p>
    ))

    return (
        <div>
            <ClientGoBackChevronButton 
            handleClick={handleGoBack}/>
            <Container>
            {allRooms.length > 0 && allRooms}
            </Container>
            <ClientConfirmationModal
          style={{height:'fit-content'}}       
          isOpen={isModalOpen} 
          onRequestClose={handleCloseModal} 
          message= "Hotel chosen!"
            ></ClientConfirmationModal>
        </div>
    );
};

export default ClientViewAll;
