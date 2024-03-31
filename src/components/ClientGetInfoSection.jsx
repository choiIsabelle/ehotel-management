import styled from 'styled-components'
import { CondensedInput } from './CondensedInput'
import { SelectDropdown } from './SelectDropdown'
import { SpinnerOnSubmit } from './SpinnerOnSubmit'
import { useState, useEffect } from 'react'
import { ConfirmationModel } from './ConfirmationModel'
import {ClientDisplayResults} from './ClientDisplayResults'

const Card = styled.div`
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
transition: 0.3s;
display: flex;
flex-direction: column;
width: 400px;
height: 600px;
padding: 1rem;
margin-top: 2rem;
margin: auto;
border-radius: 10px;
`

const SubBtn = styled.button`
background-image: linear-gradient(to right, #77A1D3 0%, #79CBCA  51%, #77A1D3  100%);
margin-top: 1rem;
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

&:hover {
    background-position: left center;
  }
`

export const ClientGetInfoSection=({sendClientInformation})=>{
  const cn = 'ClientGetInfoSection';

  const [showModal, setShowModal] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const [customerRoomCapacity, setCustomerRoomCapacity] = useState('')
  const [customerArea, setCustomerArea ] = useState('')
  const [customerHotelChain, setCustomerHotelChain] = useState('')
  const [customerHotelCategory, setCustomerHotelCatgory] = useState('')
  const [customerTotalRooms, setCustomerTotalRooms] = useState('')
  const [customerUpperRoomPrice, setCustomerUpperRoomPrice] = useState('')
  const [customerLowerRoomPrice, setCustomerLowerRoomPrice] = useState('')

  const handleOpenModal = () => {
    setShowModal(true)
  };
  
  const handleCloseModal = () => {
    setShowModal(false);
    setShowResults(true)
  };
  
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const searchMsg = hasSubmitted ? "Searching" : "Search"
  
  const handleOnSubmit=()=>{
    setHasSubmitted(true);
      // on submit, propagate data to parent component
      console.log('customer for total rooms', customerTotalRooms)
    sendClientInformation(customerRoomCapacity, customerArea, customerHotelChain, customerHotelCategory, customerTotalRooms)
        setTimeout(()=>{
          setHasSubmitted(false)
          handleOpenModal()
        }, 1500)
    }

    const [hotelChainNames, setHotelChainNames] = useState([]);
    const [hotelTotalCapacity, setHotelTotalCapacity] = useState([]);

    // get all hotel chain names
    useEffect(() => {
      const getAllHotelChains = async () => {
        const response = await fetch(`http://localhost:5000/hotel_chain`, {
          method: 'GET'
        });
        const jsonData = await response.json();
        setHotelChainNames(jsonData);
      };
  
      getAllHotelChains();
    }, []);
  
    const results = hotelChainNames.map((item) => ({
      label: item.hotel_chain_id,
      value: item.hotel_chain_id
    }));

    const handleOnHotelChainSelect=(value)=>{
      setCustomerHotelChain(value)
    }

    // get all hotels and their capacity
    useEffect(()=>{
      const getAllRoomsByAggregatedCapacity = async() => {
      try {
          const response = await fetch(`http://localhost:5000/hotel/total_capacity`, {
              method: 'GET'
          });
          const jsonData = await response.json();
          setHotelTotalCapacity(jsonData)

      } catch (error) {
          console.error(error.message);
      }
  };
  getAllRoomsByAggregatedCapacity()
    }, [])

    const handleOnHotelAggregateCapacitySelect=(value)=>{
      console.log("selected value was", value)
      setCustomerTotalRooms(value)
    }

    const hotelsByTotalCapacity = hotelTotalCapacity.map((item) => ({
      label: (item.hotel_name +" with total capacity: "+item.total_capacity),
      value: item.hotel_name
    }));

    return(
      !showResults ? (
        <Card className={cn}>
        <CondensedInput 
        id={`${cn}.customerPref`}
        title="Get Customer Preferences" 
        msg="How many rooms do you want?" 
        subMsg="Enter an integer"
        valueLabel={customerRoomCapacity}
        handleChange={(e)=>setCustomerRoomCapacity(e.target.value)}
        />

        <CondensedInput 
        msg="What area are you interested in?" 
        subMsg="Enter city name"
        valueLabel={customerArea}
        handleChange={(e)=>setCustomerArea(e.target.value)}
        />

  <SelectDropdown
  subMsg="What hotel chain are you interested in?"
  vals ={ results}
  onChange={(value)=>handleOnHotelChainSelect(value)}
  />
<SelectDropdown
subMsg="What category of hotel do you want?"
vals ={ [
  {label: '1 Star', value: '1'},
  {label: '2 Star', value: '2'},
  {label: '3 Star', value: '3'},
  {label: '4 Star', value: '4'},
  {label: '5 Star', value: '5'},
]}
onChange={(value)=>setCustomerHotelCatgory(value)}
/>

<SelectDropdown
subMsg="Select a hotel by total capacity"
vals ={hotelsByTotalCapacity }
onChange={(value)=>handleOnHotelAggregateCapacitySelect(value)}
/>
         <CondensedInput 
        msg="What is your price point?" 
        subMsg="Enter the upper bound"
        valueLabel={customerUpperRoomPrice}
        handleChange={(e)=>setCustomerUpperRoomPrice(e.target.value)}
        />

        <CondensedInput 
        msg="What is your price point?" 
        subMsg="Enter the lower bound"
        valueLabel={customerLowerRoomPrice}
        handleChange={(e)=>setCustomerLowerRoomPrice(e.target.value)}
        />
        
        <SubBtn onClick={handleOnSubmit}>{searchMsg}</SubBtn>
        {hasSubmitted && <SpinnerOnSubmit/>}
        <ConfirmationModel 
        isOpen={showModal} 
        onRequestClose={handleCloseModal} 
        message="Hotels found!"
        subMessage="View results on the next page" />
        </Card>
      ) :
      <ClientDisplayResults></ClientDisplayResults>

    )
}