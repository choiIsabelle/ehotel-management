import styled from 'styled-components'
import { CondensedInput } from './CondensedInput'

const Card = styled.div`
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
transition: 0.3s;
display: flex;
flex-direction: column;
width: 400px;
height: 400px;
padding: 2rem;
margin-top: 2rem;
margin-left: 2rem;
`

export const ClientGetInfoSection=()=>{
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
        </Card>

    )
}