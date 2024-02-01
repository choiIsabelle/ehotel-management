import styled from 'styled-components'
import { CondensedInput } from './CondensedInput'
import { useState } from 'react'

const Container = styled.div`
flex-direction: column;
display: flex;
gap: 0.1rem;
`

export const EmployeeAddBookingAction=()=>{

    const [c, setC] = useState("Customer name")

    return(
        <Container>
            <CondensedInput
            title={"Who is the booking for?"}
            valueLabel={c}
            handleClick={()=>setC('')}
            handleChange={(e)=>setC(e.target.value)}
            ></CondensedInput>

        </Container>
    )
}