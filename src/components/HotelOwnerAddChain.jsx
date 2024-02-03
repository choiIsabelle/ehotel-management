import { useState } from 'react'
import * as c from './CustomComponents'
import HotelOwnerNavigationButtons from './HotelOwnerNavigationButtons'
import {CondensedInput} from './CondensedInput'
import {HotelOwnerModifyChain} from './HotelOwnerModifyChain'

export const HotelOwnerAddChain=({onGoBack})=>{
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

            { (page === 'manage') && <div>
                <HotelOwnerModifyChain/>
        </div>
            }

            <HotelOwnerNavigationButtons
            handleGoBack={onGoBack}
            handleClick={handleNavigation}
            ></HotelOwnerNavigationButtons>
        </div>
    )
}