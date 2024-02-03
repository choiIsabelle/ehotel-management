import { useState } from 'react'
import * as c from './CustomComponents'
import HotelOwnerNavigationButtons from './HotelOwnerNavigationButtons'
import {CondensedInput} from './CondensedInput'

export const HotelOwnerAddChain=()=>{
    const [page, setPage]=useState('add')

    const handleNavigation=(currentPage)=>{
        console.log(page)
        setPage(currentPage)
    }

    return(
        <div>
            { (page === 'add') && <div>
        <c.Title>Add a Hotel Chain</c.Title>
        <c.Card>
            <CondensedInput
            
            >

            </CondensedInput>
            
        </c.Card>
        </div>
            }
TODO: MANAGE HERE

            <HotelOwnerNavigationButtons
            handleClick={handleNavigation}
            ></HotelOwnerNavigationButtons>
        </div>
    )
}