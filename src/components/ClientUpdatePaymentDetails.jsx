import { useState, useEffect } from 'react'
import { CondensedInput } from './CondensedInput'
import * as Custom from './CustomComponents'

export const ClientUpdatePaymentDetails=({id})=>{
    const [creditCard, setCreditCard] = useState('Credit card number')

    useEffect(()=>{
        const getCustomerCreditCardDetails=async(id)=>{
            try{
                const response = await(fetch(`http://localhost:5000/customer/${id}`,{
                    method: "GET"
                }));
                const jsonData = await response.json();
                setCreditCard(jsonData.rows[0].credit_card_number);

            }
            catch(error){
                console.error('Could not fetch customer credit card details', error.message);
            }
        }
        getCustomerCreditCardDetails(id)
    }, [])

    const updatePaymentDetails= async (e, id)=>{
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:5000/customer/${id}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({credit_card_number: creditCard})
            })
            const jsonData = await response.json();
            console.log(jsonData)
            alert("Credit card information successfully updated")
        } catch (error) {
            console.error(error.message)
            
        }
    }

        return(
            <Custom.Card className='updatePaymentDetails-container' style={{width:'fit-content'}}>
                <CondensedInput
                title={"Update payment details"}
                msg='Enter credit card'
                subMsg={'Enter the credit card number that you want associated with your account'}
                handleChange={(e)=>setCreditCard(e.target.value)}
                handleClick={()=>setCreditCard('')}
                valueLabel={creditCard}
                >
                </CondensedInput>
                <Custom.SearchButton 
                onClick={ e=> updatePaymentDetails(e)}>
                    Update payment details
                    </Custom.SearchButton>
                
            </Custom.Card>
        )
    
}