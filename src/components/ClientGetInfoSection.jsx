import styled from 'styled-components'
import { CondensedInput } from './CondensedInput'
import { SelectDropdown } from './SelectDropdown'
import { SpinnerOnSubmit } from './SpinnerOnSubmit'
import { useState } from 'react'

const Card = styled.div`
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
transition: 0.3s;
display: flex;
flex-direction: column;
width: 400px;
height: 600px;
padding: 1rem;
margin-top: 2rem;
margin-left: 2rem;
border-radius: 10px;
`

const SubBtn = styled.button`
background-color: blue;
font-weight:bold;
font-size: 14px;
color:white;
margin-top: 2rem;
`

export const ClientGetInfoSection=()=>{
    const [hasSubmitted, setHasSubmitted] = useState(false)
    const searchMsg = hasSubmitted ? "Searching" : "Search"

    const handleOnSubmit=()=>{
        setHasSubmitted(true);
        setTimeout(()=>{
            setHasSubmitted(false)
        }, 1500)
    }


    return(
        <Card>
        <CondensedInput 
        title="Get Customer Preferences" 
        msg="How many rooms do you want?" 
        subMsg="Enter an integer"/>
        <CondensedInput 
        msg="What area are you interested in?" 
        subMsg="Enter city name"/>
           <CondensedInput 
        msg="What is your price point?" 
        subMsg="Enter the lower bound"/>
        <SelectDropdown
        subMsg="What hotel chain are you interested in?"
        vals ={ [
            {label: 'Hyatt', value: 'hyatt'},
            {label: 'Hilton', value: 'hilton'},
            {label: 'Four Seasons', value: 'four seasons'},
          ]}
        />
          <SelectDropdown
        subMsg="What category of hotel do you want?"
        vals ={ [
            {label: 'Modern', value: 'modern'},
            {label: 'Resort', value: 'resort'},
            {label: 'Conference', value: 'conference'},
          ]}
        />
        <SubBtn onClick={handleOnSubmit}>{searchMsg}</SubBtn>
        {hasSubmitted && <SpinnerOnSubmit/>}
        </Card>

    )
}