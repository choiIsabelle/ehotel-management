import * as c from './CustomComponents'
import {CondensedInput} from './CondensedInput'

//TODO: maybe it would be better to let the user search for the hotel chain
// and then provide the information from the hotel chain that should be updated
// with each value as the pre-existing input
// so that the update can be more easily applied since all the pre-existing information is provided

export const HotelOwnerModifyChain=()=>{

    const handleSubmit=()=>{
        console.log('submitted')
    }
    return(
        <div>
        <c.Title>Manage a Hotel Chain</c.Title>
        <c.Card>
            <form onSubmit={handleSubmit}>
            <CondensedInput
                title="Manage an existing hotel chain"
                msg="Enter hotel chain name"
                subMsg="What is the name of the hotel chain you want to make changes to?"
            >
            </CondensedInput>

            <CondensedInput
                msg="Enter new manager name"
                subMsg="Enter the full name of the new manager for this location"
            >
            </CondensedInput>

            <CondensedInput
                msg="Enter new phone number"
                subMsg="Enter the full name of the new manager for this location"
            >
            </CondensedInput>

            <CondensedInput
                msg="Enter new room amount"
                subMsg="Enter the full name of the new manager for this location"
            >

            <CondensedInput
                msg="Enter new  hotel address"
                subMsg="Enter the full name of the new manager for this location"
            >
            </CondensedInput>

            </CondensedInput>

            <c.SearchButton type='submit'
            >Submit</c.SearchButton>
            </form>
        </c.Card>
        </div>

    )
}