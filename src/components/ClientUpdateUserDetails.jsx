import * as Custom from './CustomComponents'
import { CondensedInput } from './CondensedInput'
export const ClientUpdateUserDetails=()=>{
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
        <Custom.SearchButton>Update User personal details</Custom.SearchButton>
        </form>
        
    </Custom.Card>

    )
}