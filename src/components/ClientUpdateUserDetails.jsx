import * as Custom from './CustomComponents'
import { CondensedInput } from './CondensedInput'
import {useState, useEffect} from 'react';

export const ClientUpdateUserDetails=({id})=>{
    const [customerName, setCustomerName ]= useState('current');
    const [customerAddress, setCustomerAddress] = useState('currentAddress');

    useEffect(() => {
        const getCustomerUserDetails = async (id) => {
            try {
                const response = await fetch(`http://localhost:5000/customer/${id}`, {
                    method: "GET"
            });
                const jsonData = await response.json();
                const fullName = jsonData.rows[0].full_name;
                const address = jsonData.rows[0].address;
                setCustomerName(fullName);
                setCustomerAddress(address);
            } catch (error) {
                console.error(error);
            }
        };

        getCustomerUserDetails(id);
    }, [id]); 

    const handleUpdateClientName= async (customerName)=>{
        try {
            const response = await fetch(`http://localhost:5000/customer/${id}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({full_name: customerName, address: customerAddress})
            });
            console.log(response)
            alert("Client name successfully updated!")
            
        } catch (error) {
            console.error(`Could not update customer with SSN ${id} `, error.message)   
        }
    }

    const handleUpdateClientAddress= async (customerAddress)=>{
        try {
            const response = await fetch(`http://localhost:5000/customer/address/${id}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({address: customerAddress, full_name: customerName})
            });
            alert("Client address successfully updated!")
            
        } catch (error) {
            console.error(`Could not update customer with SSN ${id} `, error.message)   
        }
    }

    return(
        <Custom.Card>
            <Custom.Title>Welcome, {customerName}!</Custom.Title>
        <CondensedInput
        title={"Update User Details"}
        msg={"Update Name"}
        handleClick={()=>setCustomerName('')}
        handleChange={(e)=>setCustomerName(e.target.value)}
        valueLabel={customerName}
        subMsg={'Enter the name you want associated with your profile'}
        >
        </CondensedInput>
        <Custom.SearchButton
        id="ClientUpdateUserDetails-update-btn"
        onClick={()=>handleUpdateClientName(customerName)}
        >Update Name
        </Custom.SearchButton>
        <CondensedInput
        msg={"Update Address"}
        subMsg={'Enter the address you want associated with your profile'}
        valueLabel={customerAddress}
        handleClick={()=> setCustomerAddress('')}
        handleChange={(e)=> setCustomerAddress(e.target.value)}
        >
        </CondensedInput>
        <Custom.SearchButton
        id="ClientUpdateUserDetails-update-address-btn"
        onClick={()=>handleUpdateClientAddress(customerAddress)}
        >Update Address</Custom.SearchButton>
        <CondensedInput
        msg={"Enter a Phone Number to Associate With Your Account"}
        />
        <Custom.SearchButton>Update Phone Number</Custom.SearchButton>
    </Custom.Card>
    )
}