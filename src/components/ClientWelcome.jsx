import styled from 'styled-components'
import { PersonIcon } from './icons/PersonIcon';
import { useState } from 'react';

const Text = styled.span`
margin-top: 1rem;
font-weight: bold;
font-size: 19px;
`
const SubText = styled.p`
`

const IconContainer=styled.div`
display: flex;
justify-content: center;
align-items: center;
`

const InnerText = styled.p`
font-weight: bold;
font-size: 14px;
`

const Container = styled.div`
gap: 0.5rem;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
transition: 0.3s;
display: flex;
flex-direction: column;
width: 400px;
height: fit-content;
padding: 2rem;
border-radius: 10px;
`

const SubmitButton = styled.button`
background-image: linear-gradient(to right, #77A1D3 0%, #79CBCA  51%, #77A1D3  100%);
margin: 10px;
padding: 15px 45px;
text-align: center;
text-transform: uppercase;
transition: 0.5s;
background-size: 200% auto;
color: white;            
box-shadow: 0 0 20px #eee;
border-radius: 10px;
display: block;
text-decoration: none;
background-position: right center;

&:hover {
    background-position: left center; /* change the direction of the change here */
  }
`

const InnerCard = styled.div`
margin-top: 1rem;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
background-color: #F1F1F2;
padding: 1rem;
gap: 0.5rem;
display: flex;
flex-direction: column;
`

export const ClientWelcome=({title, subTitle, innermsg, subMsg, role, handleOnClick})=>{

    return(
        <Container>
            <IconContainer>
            {role==='client' && <PersonIcon/>}
            {role==='employee' && <PersonIcon/>}
            {role==='hotelOwner' && <PersonIcon/>}
            </IconContainer>
            <Text>{title}</Text>
            <SubText>{subTitle}</SubText>
            <InnerCard>
                <InnerText>{innermsg}</InnerText>
            <SubmitButton onClick={handleOnClick}>{subMsg}</SubmitButton>
            </InnerCard>


        </Container>

    )
}