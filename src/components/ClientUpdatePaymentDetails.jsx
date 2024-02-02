import { CondensedInput } from './CondensedInput'
import * as Custom from './CustomComponents'
export const ClientUpdatePaymentDetails=()=>{
        return(
            <Custom.Card>
                <form>
                <CondensedInput
                title={"Update payment details"}
                subMsg={'Enter your SSN'}
                value={'Credit card number'}
                >
                </CondensedInput>

                <CondensedInput
                subMsg={'Enter your SSN'}
                value={'Credit card number'}
                >
                </CondensedInput>
                <Custom.SearchButton>Update payment details</Custom.SearchButton>
                </form>
                
            </Custom.Card>
        )
    
}