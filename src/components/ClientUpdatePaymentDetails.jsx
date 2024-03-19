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
                console.error(error.message);
            }
        }
        getCustomerCreditCardDetails(id)
    }, [])

        return(
            <Custom.Card className='updatePaymentDetails-container' style={{width:'fit-content'}}>
                <CondensedInput
                title={"Update payment details"}
                msg='Enter credit card'
                subMsg={'Enter the credit card number that you want associated with your account'}
                onChange={(e)=>setCreditCard(e.target.value)}
                handleClick={()=>setCreditCard('')}
                valueLabel={creditCard}
                >
                </CondensedInput>
                <Custom.SearchButton>Update payment details</Custom.SearchButton>
                
            </Custom.Card>
        )
    
}