import * as c from './CustomComponents'
import { CondensedInput } from './CondensedInput'
import { useState } from 'react'
import { EmployeeNavigationButtons } from './EmployeeNavigationButtons'

export const EmployeeAddNewRoom=({goBack, goManage, goAdd, goRemove})=>{
    const exmsg = "Enter room extendability"
    const rcmsg = "Enter room capacity"
    const rtmsg = "Enter room type"
    const drmsg = "Enter daily rate"
    const amsg = "What amenities are offered?"
    const dmsg = "What damages are associated with the room?"
    const rhmsg = "What is the ID of the hotel this room is associated with?"
    
    const [extendable, setExtendable] = useState(`${exmsg}`);
    const [roomCapacity, setRoomCapacity] = useState(`${rcmsg}`);
    const [roomType, setRoomType] = useState(`${rtmsg}`);
    const [dailyRate, setDailyRate] = useState(`${drmsg}`);
    const [amenities, setAmenities] = useState(`${amsg}`);
    const [damages, setDamages] = useState(`${dmsg}`);
    const [roomHotelId, setRoomHotelId] = useState(`${rhmsg}`);

    const handleSubmit= async(e)=>{
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/room',{
                method: "POST",
                headers:{"Content-Type": "application/json"},
                body: JSON.stringify({extendable: extendable, room_capacity: roomCapacity, room_type: roomType, daily_rate: dailyRate, amenities: amenities, damages: damages, room_hotel_chain_id: roomHotelId})
            })
            alert("New Room Availability Added Successfully!")
            
        }  catch (error) {
            alert("Something went wrong in adding a new room")
            console.error("Adding a new room could not be completed", console.error)
            
        }
    }


    return(
        <div>
               <c.Card style={{marginTop: 0}}>
                   <form onSubmit={handleSubmit} >
                   <CondensedInput
                       title="Add a new Room Availability"
                       msg={exmsg}
                       valueLabel={extendable}
                       handleChange={(e)=>setExtendable(e.target.value)}
                       handleClick={()=>setExtendable('')}
                   >
                   </CondensedInput>
       
                   <CondensedInput
                       msg={rcmsg}
                       valueLabel={roomCapacity}
                       handleChange={(e)=>setRoomCapacity(e.target.value)}
                       handleClick={()=>setRoomCapacity('')}
                   >
                   </CondensedInput>
       
                   <CondensedInput
                       msg={rtmsg}
                       valueLabel={roomType}
                       handleChange={(e)=>setRoomType(e.target.value)}
                       handleClick={()=>setRoomType('')}
                   >
                   </CondensedInput>
       
                   <CondensedInput
                       msg={drmsg}
                       valueLabel={dailyRate}
                       handleChange={(e)=>setDailyRate(e.target.value)}
                       handleClick={()=>setDailyRate('')}
                   >
                       </CondensedInput>
       
                   <CondensedInput
                       msg={amsg}
                       valueLabel={amenities}
                       handleChange={(e)=>setAmenities(e.target.value)}
                       handleClick={()=>setAmenities('')}
                   >
                   </CondensedInput>
       
                   <CondensedInput
                       msg={dmsg}
                       valueLabel={damages}
                       handleChange={(e)=>setDamages(e.target.value)}
                       handleClick={()=>setDamages('')}
                   >
                   </CondensedInput>
    
                   <CondensedInput
                       msg={rhmsg}
                       valueLabel={roomHotelId}
                       handleChange={(e)=>setRoomHotelId(e.target.value)}
                       handleClick={()=>setRoomHotelId('')}
                   >
                   </CondensedInput>
                   <c.SearchButton style={{marginTop: '1rem'}}>
                    Add New Room
                   </c.SearchButton>

                   </form>
               <button className='EmployeeAddNewRoom-btn-back' style={{borderColor: 'black', marginTop: '1rem', marginBottom: '1rem'}} onClick={()=>goBack()}>Go back</button>
               <EmployeeNavigationButtons
                        handleUpdate={goManage}
                        handleAdd={goAdd}
                        handleRemove={goRemove}
            ></EmployeeNavigationButtons>
               </c.Card>
               </div>

    )
}
