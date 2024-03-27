import * as c from './CustomComponents'
import {CondensedInput} from './CondensedInput'
import {Tooltip} from '@shopify/polaris'
import {useState} from 'react';

export const HotelOwnerAddChain=()=>{
    const [hotelName, setHotelName] = useState('Hotel chain name');
    const [managerName, setManagerName] = useState('Manager name');
    const [phoneNumber, setPhoneNumber] = useState('Phone number');
    const [roomAmount, setRoomAmount] = useState('Enter number of rooms');
    const [hotelAddress, setHotelAddress] = useState('Enter street address of hotel chain');
    const [hotelAssociated, setHotelAssociated] = useState('Name of hotel associated with this chain');

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/Hotel',{
                method: "POST",
                headers:{"Content-Type": "application/json"},
                body: JSON.stringify(
                    {
                        "hotel_name": hotelName,
                        "manager": managerName,
                        "chain_phone_number": phoneNumber,
                        "num_rooms": roomAmount,
                        "hotel_address": hotelAddress,
                        "hotel_related_chain": hotelAssociated
                    }
                    
                )
            })
            alert("New Hotel Chain Submitted Successfully!")
            
        } catch (error) {
            console.error(error.message)
        }
        

    }
    function TooltipBtn(){
        return(
            <div>
            <Tooltip 
            dismissOnMouseOut
            preferredPosition='below'
            content={<b>A new hotel chain will be added on submission</b>}>
            <c.SearchButton 
                onSubmit={()=>handleSubmit}
                type='submit'
                >
                    Submit
                </c.SearchButton>
            </Tooltip>
          </div>
        )
    }
    return(
        <div>
 <c.Title>Add a New Hotel Chain</c.Title>
        <c.Card style={{marginTop:'4rem'}}>
            <form onSubmit={handleSubmit}>
            <CondensedInput
                title="Create a new hotel chain"
                msg="Enter hotel chain name"
                subMsg="What is the name of the hotel chain you want to make changes to?"
                valueLabel={hotelName}
                handleChange={(e)=>setHotelName(e.target.value)}
                handleClick={()=>setHotelName('')}
            >
            </CondensedInput>

            <CondensedInput
                msg="Enter manager name"
                subMsg="Enter the full name of the new manager for this location"
                valueLabel={managerName}
                handleChange={(e)=>setManagerName(e.target.value)}
                handleClick={()=>setManagerName('')}
            >
            </CondensedInput>

            <CondensedInput
            id="HotelOwnerAddChain-phoneNumberInput"
                msg="Enter phone number"
                subMsg="Enter phone number for this hotel chain"
                valueLabel={phoneNumber}
                handleChange={(e)=>setPhoneNumber(e.target.value)}
                handleClick={()=>setPhoneNumber('')}
            >
            </CondensedInput>

            <CondensedInput
                msg="Enter room amount"
                subMsg="Enter the number of rooms for this hotel chain"
                valueLabel={roomAmount}
                handleChange={(e)=>setRoomAmount(e.target.value)}
                handleClick={()=>setRoomAmount('')}
            >
                </CondensedInput>

            <CondensedInput
                msg="Enter hotel address"
                subMsg="Enter the street address for this hotel chain"
                valueLabel={hotelAddress}
                handleChange={(e)=>setHotelAddress(e.target.value)}
                handleClick={()=>setHotelAddress('')}
            >
            </CondensedInput>

            <CondensedInput
                msg="Enter the associated hotel name"
                subMsg="Enter the name of the hotel that this hotel chain belongs to"
                valueLabel={hotelAssociated}
                handleChange={(e)=>setHotelAssociated(e.target.value)}
                handleClick={()=>setHotelAssociated('')}
            >
            </CondensedInput>

            <TooltipBtn
            />
            </form>
        </c.Card>
        </div>
    )
}