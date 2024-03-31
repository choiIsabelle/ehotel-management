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

export const ClientGetInfoSection=()=>{
  const cn = 'ClientGetInfoSection';

  const [showModal, setShowModal] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const [customerRoomCapacity, setCustomerRoomCapacity] = useState('')
  const [customerArea, setCustomerArea ] = useState('')
  const [customerHotelChain, setCustomerHotelChain] = useState('')
  const [customerHotelCategory, setCustomerHotelCatgory] = useState('')
  const [customerTotalRooms, setCustomerTotalRooms] = useState('')
  const [customerRoomPrice, setCustomerRoomPrice] = useState('')

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
        setTimeout(()=>{
          setHasSubmitted(false)
          handleOpenModal()
        }, 1500)
    }

    const [hotelChainNames, setHotelChainNames] = useState([]);

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
      console.log(value)
    }


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
         <CondensedInput 
        msg="What is your price point?" 
        subMsg="Enter the upper bound"
        valueLabel={customerArea}
        handleChange={(e)=>setCustomerArea(e.target.value)}
        />

        <CondensedInput 
        msg="What is your price point?" 
        subMsg="Enter the lower bound"
        valueLabel={customerArea}
        handleChange={(e)=>setCustomerArea(e.target.value)}
        />
        
          <SelectDropdown
        subMsg="What category of hotel do you want?"
        vals ={ [
            {label: '1 Star', value: '1'},
            {label: '2 Star', value: '2'},
            {label: '3 Star', value: '3'},
          ]}
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