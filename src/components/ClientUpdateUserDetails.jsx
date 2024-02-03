import * as Custom from './CustomComponents'
import { CondensedInput } from './CondensedInput'
export const ClientUpdateUserDetails=()=>{
    return(
        <Custom.Card>
        <form>
        <CondensedInput
        title={"Update User Details"}
        msg={"Update Name"}
        subMsg={'Enter the name you want associated with your profile'}
        >
        </CondensedInput>
        <Custom.SearchButton>Update Name</Custom.SearchButton>
        <CondensedInput
        msg={"Update Address"}
        subMsg={'Enter the address you want associated with your profile'}
        >
        </CondensedInput>
        <Custom.SearchButton>Update Address</Custom.SearchButton>
        </form>
        
    </Custom.Card>

    )
}