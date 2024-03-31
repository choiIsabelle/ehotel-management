import { useState } from 'react';
import {SwitchTab} from './SwitchTab';
import { ClientGetInfoSection } from './ClientGetInfoSection';
import styled from 'styled-components';
import ClientNavigationButtons from './ClientNavigationButtons';
import { ClientDatePicker } from './ClientDatePicker';

const Container = styled.div`
display: flex;
width: 800px;; // keep the positioning of the switch tabs consitent
height:500px;
flex-direction: column;
`

export const ClientTabContainer = ({handleClick, handleGoBack }) => {
  // Initial active state is '1'
  // (2) Max value of the active state is '3' since each onNext and onPrev increments/decrements this value
  // 3 tabs are shown: 3 is not a valid number to have a 'next tab' but it is accounted for

  const [activeTab, setActiveTab] = useState(1);

  const handleTabChange = (newTab) => {
    setActiveTab(newTab);
  };

  const handleDateData=(arrivalDate, departureDate)=>{
    console.log(arrivalDate, departureDate)
  }

  const handleClientInformation=()=>{
    console.log()
  }


  return (
    <Container>
      <SwitchTab activeTab={activeTab} onTabChange={handleTabChange} />
      {activeTab === 1 && <ClientDatePicker sendDateInformation={handleDateData}></ClientDatePicker>}
      {activeTab ===2 && <ClientGetInfoSection sendClientInformation={handleClientInformation}/>}
      <ClientNavigationButtons
      handleClick={handleClick}
        handleGoBack={handleGoBack}
        >
      </ClientNavigationButtons>
    </Container>
  );
};


