import * as c from './CustomComponents'
import {CondensedInput} from './CondensedInput'
import {useState} from 'react'
import { HotelOwnerAddChain } from './HotelOwnerAddChain'

export const HotelOwnerModifyChain=()=>{

    const [page, setPage]=useState('manage')

    const handleNavigation=(currentPage)=>{
        setPage(currentPage)
    }

    return(
        <div>
            { page === 'manage' &&
        <div>
        <c.Title>Manage a Hotel Chain</c.Title>
        <c.Card>
            <CondensedInput
            
            >

            </CondensedInput>
            
        </c.Card>
        </div>
        }

        {page ==='add' &&
        <HotelOwnerAddChain
        
        ></HotelOwnerAddChain>
        }

        </div>
    )
}