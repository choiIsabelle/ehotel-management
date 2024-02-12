import { useState, useEffect } from 'react';
import styled from 'styled-components'
import { PersonIcon } from './icons/PersonIcon';
import { EmployeeIcon } from './icons/EmployeeIcon';
import { HotelOwnerIcon } from './icons/HotelOwnerIcon';
import { resource } from './localizedStrings';
import WelcomeAlternatingText from './GeneralWelcomeAlternatingText';

const TitleText = styled.h1`
font-size: 30px;
font-weight: bold;
`

const InnerTitle = styled.h2`
font-size: 16px;
font-weight: bold;
`

const InnerSubText = styled.p`
font-size: 13px;
font-weight: 400;
`

const EmphText = styled.div`
font-size: 30px;
font-weight: bold;
background: linear-gradient(90deg, rgba(84, 36, 132, 1) 0%, rgba(43, 164, 170, 1) 100%);
-webkit-background-clip: text;
background-clip: text;
color: transparent;
display: inline-block;
-webkit-mask-image: linear-gradient(90deg, #000 0%, #000 100%);
mask-image: linear-gradient(90deg, #000 0%, #000 100%);
background-color: white; 
display: block;
line-height: 1.25;
`

const UpperContainer = styled.div`
flex-direction: column;
display: flex;
gap: 0.5rem;
`

const TotalContainer = styled.div`

`
const IconContainer=styled.div`
display: flex;
padding: 1rem;
justify-content: center;
align-items: center;
`

const ActionsContainer = styled.div`
margin-top: 4rem;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
background-color: #F1F1F2;
padding: 1rem;
gap: 1rem;
justify-content: center;
height: fit-content;
width: 800px;
border-radius: 10px;
display: flex;
flex-direction: row;
`

const ItemCard = styled.div`
flex-direction: column;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
padding: 1rem;
max-width: 250px;
display: flex;
background-color: white;
border-radius: 10px;
transition: 0.5s;
&.grow {
    transition: all .4s ease-in-out;

    &:hover {

    }
  }


&:hover {
    background-position: left center;
    transform: scale(1.1);
  }
`
const SubmitButton = styled.button`
background-image: linear-gradient(to right, #77A1D3 0%, #79CBCA  51%, #77A1D3  100%);
margin: 10px;
padding: 15px ;
text-align: center;
text-transform: uppercase;
background-size: 200% auto;
color: white;            
box-shadow: 0 0 20px #eee;
border-radius: 10px;
display: block;
text-decoration: none;
background-position: right center;
`


const Typewriter = ({ text, delay }) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
        if (currentIndex < text.length) {
          const timeout = setTimeout(() => {
            setCurrentText(prevText => prevText + text[currentIndex]);
            setCurrentIndex(prevIndex => prevIndex + 1);
          }, delay);
      
          return () => clearTimeout(timeout);
        }
      }, [currentIndex, delay, text]);
  
    return <span>{currentText}</span>;
  };

export const GeneralWelcomePage=({onNavigate})=>{
    const [ { genWelcomeTitle: genWelcomeTitleText } ] = resource;

    return(
        <TotalContainer>
            <UpperContainer>
                <TitleText>{genWelcomeTitleText}</TitleText>
                 <EmphText>
                    <Typewriter text='eHotel Management System' delay={100}></Typewriter>
                    </EmphText>
                    <InnerTitle>A responsive tool to manage hotel bookings and offerings</InnerTitle>
                    <WelcomeAlternatingText/>
            </UpperContainer>
            <ActionsContainer>
            {/* <InnerTitle>What are you looking to do today?</InnerTitle> */}
                <ItemCard>
                    <IconContainer>
                <PersonIcon/>
                </IconContainer>
                <InnerTitle>Client</InnerTitle>
                <InnerSubText>I am a Client looking to book a hotel</InnerSubText>
                    <SubmitButton onClick={()=>onNavigate('clientW')}>Go to Client</SubmitButton>
                </ItemCard>

                <ItemCard>
                    <IconContainer>
                <EmployeeIcon/>
                </IconContainer>
                <InnerTitle>Employee</InnerTitle>
                <InnerSubText>I am an Employee looking to manage bookings</InnerSubText>
                    <SubmitButton onClick={()=>onNavigate('employeeW')}>Go to Employee</SubmitButton>
                </ItemCard>


                <ItemCard>
                    <IconContainer>
                <HotelOwnerIcon/>
                </IconContainer>
                <InnerTitle>Hotel Owner</InnerTitle>
                <InnerSubText>I am a Hotel Owner looking to manage my hotel offerings</InnerSubText>
                    <SubmitButton onClick={()=>onNavigate('hotelOwnerW')}>Go to Hotel Owner</SubmitButton>
                </ItemCard>
                

            </ActionsContainer>

</TotalContainer>
    )
}