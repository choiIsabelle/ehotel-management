import * as c from './CustomComponents'
import { CondensedInput } from './CondensedInput';
import { useState } from 'react';

export const HotelOwnerAddNewHotel=()=>{
    const hotelOwnerAddNewMsg = 'Add a new Hotel'
    const hotelIdMsg ="Enter Hotel Chain id"
    const hotelEmailMsg = "Whatis the email address associated with this hotel?"
    const hotelNumAssociationsMsg ="How many hotel chains are associated with this hotel?"
    const hotelStreetAddressMsg= "What is the street address of the hotel office?"
    const hotelOfficeAddressMsg ="What is the address of the hotel office?"
    const hotelPhoneNumMsg ="Enter hotel office phone number"

    const [hotelId, setHotelId] = useState(`${hotelIdMsg}`)
    const [hotelEmailAddress, setHotelEmailAddress] = useState(`${hotelEmailMsg}`)
    const [numHotelAssociations, setNumHotelAssociations] = useState(`${hotelNumAssociationsMsg}`)
    const [hotelStreetAddress, setHotelStreetAdress] = useState(`${hotelStreetAddressMsg}`)
    const [hotelAddress, setHotelAddress] = useState(`${hotelOfficeAddressMsg}`)
    const [hotelPhoneNumber, setHotelPhoneNumber] = useState(`${hotelPhoneNumMsg}`)


    const handleSubmit= async (e)=>{
        alert("submitted!")
        try {
            
        } catch (error) {
            console.error("New hotel could not be added ", error.message)
            
        }
        const resonse = await fetch(`http://localhost:5000/Hotel`)
    }


    return(
        <div id="HotelOwnerAddNewHotel-container">
        <c.Card>
        <form onSubmit={handleSubmit}>
        <CondensedInput
                title={hotelOwnerAddNewMsg}
                msg={hotelIdMsg}
                valueLabel={hotelId}
                handleChange={(e)=>setHotelId(e.target.value)}
                handleClick={()=>setHotelId('')}
                >
            </CondensedInput>
            <CondensedInput
                msg={hotelEmailMsg}
                valueLabel={hotelEmailAddress}
                handleChange={(e)=>setHotelEmailAddress(e.target.value)}
                handleClick={()=>setHotelEmailAddress('')}
                >
            </CondensedInput>  
            <CondensedInput
                msg={hotelNumAssociationsMsg}
                valueLabel={numHotelAssociations}
                handleChange={(e)=>setNumHotelAssociations(e.target.value)}
                handleClick={()=>setNumHotelAssociations('')}
                >
            </CondensedInput>  
            <CondensedInput
                msg={hotelStreetAddressMsg}
                valueLabel={hotelStreetAddress}
                handleChange={(e)=>setHotelStreetAdress(e.target.value)}
                handleClick={()=>setHotelStreetAdress('')}
                >
            </CondensedInput>  
            <CondensedInput
                msg={hotelOfficeAddressMsg}
                valueLabel={hotelAddress}
                handleChange={(e)=>setHotelAddress(e.target.value)}
                handleClick={()=>setHotelAddress('')}
                >
            </CondensedInput>  
            <CondensedInput
                msg={hotelPhoneNumMsg}
                valueLabel={hotelPhoneNumber}
                handleChange={(e)=>setHotelPhoneNumber(e.target.value)}
                handleClick={()=>setHotelPhoneNumber('')}
                >
            </CondensedInput> 

            <c.SearchButton
            type="submit">
                Add new Hotel
            </c.SearchButton>

        </form>
        </c.Card>
        </div>

    );
}
