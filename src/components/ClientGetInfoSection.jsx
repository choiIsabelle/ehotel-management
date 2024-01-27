import styled from 'styled-components'
import { CondensedInput } from './CondensedInput'
import { SelectDropdown } from './SelectDropdown'
import { SpinnerOnSubmit } from './SpinnerOnSubmit'
import { useState } from 'react'
import { ConfirmationModel } from './ConfirmationModel'

const Card = styled.div`
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
transition: 0.3s;
display: flex;
flex-direction: column;
width: 400px;
height: 600px;
padding: 1rem;
margin-top: 2rem;
margin-left: 2rem;
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
    background-position: left center; /* change the direction of the change here */
  }
`

export const ClientGetInfoSection=()=>{

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    console.log(showModal)
    setShowModal(true)
  };

  const handleCloseModal = () => {
    setShowModal(false);
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


    return(
      <>
        <Card>
        <CondensedInput 
        title="Get Customer Preferences" 
        msg="How many rooms do you want?" 
        subMsg="Enter an integer"/>
        <CondensedInput 
        msg="What area are you interested in?" 
        subMsg="Enter city name"/>
           <CondensedInput 
        msg="What is your price point?" 
        subMsg="Enter the lower bound"/>
        <SelectDropdown
        subMsg="What hotel chain are you interested in?"
        vals ={ [
            {label: 'Hyatt', value: 'hyatt'},
            {label: 'Hilton', value: 'hilton'},
            {label: 'Four Seasons', value: 'four seasons'},
          ]}
        />
          <SelectDropdown
        subMsg="What category of hotel do you want?"
        vals ={ [
            {label: 'Modern', value: 'modern'},
            {label: 'Resort', value: 'resort'},
            {label: 'Conference', value: 'conference'},
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
        </>

    )
}