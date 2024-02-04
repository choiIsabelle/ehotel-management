import * as c from './CustomComponents'
import {CondensedInput} from './CondensedInput'
import {Tooltip} from '@shopify/polaris'

function TooltipBtn(){
    return(
        <div>
        <Tooltip 
        dismissOnMouseOut
        preferredPosition='below'
        content={<b>A new hotel chain will be added on submission</b>}>
        <c.SearchButton 
            type='submit'
            >
                Submit
            </c.SearchButton>
        </Tooltip>
      </div>
    )
}

export const HotelOwnerAddChain=()=>{

    const handleSubmit=()=>{
        console.log('submitted')
    }

    return(
        <div>
 <c.Title>Add a New Hotel Chain</c.Title>
        <c.Card>
            <form onSubmit={handleSubmit}>
            <CondensedInput
                title="Create a new hotel chain"
                msg="Enter hotel chain name"
                subMsg="What is the name of the hotel chain you want to make changes to?"
            >
            </CondensedInput>

            <CondensedInput
                msg="Enter manager name"
                subMsg="Enter the full name of the new manager for this location"
            >
            </CondensedInput>

            <CondensedInput
                msg="Enter phone number"
                subMsg="Enter the full name of the new manager for this location"
            >
            </CondensedInput>

            <CondensedInput
                msg="Enter room amount"
                subMsg="Enter the full name of the new manager for this location"
            >

            <CondensedInput
                msg="Enter hotel address"
                subMsg="Enter the full name of the new manager for this location"
            >
            </CondensedInput>

            </CondensedInput>
            <TooltipBtn>

            </TooltipBtn>
            </form>
        </c.Card>
        </div>
    )
}