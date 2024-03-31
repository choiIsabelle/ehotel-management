import * as Custom from './CustomComponents'
import { CondensedInput } from './CondensedInput'
import {useState, useEffect} from 'react';

export const ClientUpdateUserDetails=({id})=>{
    const [customerFirstName, setCustomerFirstName ]= useState('');
    const [customerLastName, setCustomerLastName ]= useState('');
    const [customerAddress, setCustomerAddress] = useState('');

    useEffect(() => {
        const getCustomerUserDetails = async (id) => {
            try {
                const response = await fetch(`http://localhost:5000/customer/${id}`, {
                    method: "GET"
            });
                const jsonData = await response.json();
                const first_name = jsonData.rows[0].first_name;
                const last_name = jsonData.rows[0].last_name;
                const customer_address = jsonData.rows[0].customer_address;
                setCustomerFirstName(first_name);
                setCustomerLastName(last_name)
                setCustomerAddress(customer_address);
            } catch (error) {
                console.error(error);
            }
        };

        getCustomerUserDetails(id);
    }, [id]); 

    const handleUpdateClientName= async (first_name, last_name)=>{
        try {
            const response = await fetch(`http://localhost:5000/customer/${id}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({first_name: first_name, last_name: last_name, customer_address: customerAddress})
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
                body: JSON.stringify({customer_address: customerAddress, })
            });
            console.log(response)
            alert("Client address successfully updated!")
            
        } catch (error) {
            console.error(`Could not update customer with SSN ${id} `, error.message)   
        }
    }

    return(
        <Custom.Card>
        <CondensedInput
        title={"Update User Details"}
        msg={"Update First Name"}
        handleClick={()=>setCustomerFirstName('')}
        handleChange={(e)=>setCustomerFirstName(e.target.value)}
        valueLabel={customerFirstName}
        subMsg={'Enter the name you want associated with your profile'}
        >
        </CondensedInput>
        <CondensedInput
        msg={"Update Last Name"}
        handleClick={()=>setCustomerLastName('')}
        handleChange={(e)=>setCustomerLastName(e.target.value)}
        valueLabel={customerLastName}
        subMsg={'Enter the name you want associated with your profile'}
        >
        </CondensedInput>
        <Custom.SearchButton
        id="ClientUpdateUserDetails-update-btn"
        onClick={()=>handleUpdateClientName(customerFirstName, customerLastName)}
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