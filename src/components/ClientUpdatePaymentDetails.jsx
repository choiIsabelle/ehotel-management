import { useState } from 'react'
import { CondensedInput } from './CondensedInput'
import * as Custom from './CustomComponents'

export const ClientUpdatePaymentDetails=()=>{
    const [creditCard, setCreditCard] = useState('Credit card number')

        return(
            <Custom.Card>
                <form>
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
                </form>
                
            </Custom.Card>
        )
    
}