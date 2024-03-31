import { useState, useEffect } from 'react';
import {SwitchTab} from './SwitchTab';
import { ClientGetInfoSection } from './ClientGetInfoSection';
import styled from 'styled-components';
import ClientNavigationButtons from './ClientNavigationButtons';
import { ClientDatePicker } from './ClientDatePicker';
import { ClientDisplayResults } from './ClientDisplayResults';

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
  const [customerPreference, setCustomerPreference] = useState([])

  const handleTabChange = (newTab) => {
    setActiveTab(newTab);
  };

  useEffect(() => {
    console.log('Customer preference updated:', customerPreference);
  }, [customerPreference]);


  const handleDateData = (arrivalDate, departureDate) => {
    setCustomerPreference((prevPreference) => [
      ...prevPreference,
      { arrivalDate, departureDate },
    ]);
  };

  const handleClientInformation = (...props) => {
    setCustomerPreference((prevPreference) => [...prevPreference, { props }]);
  };



  return (
    <Container>
      <SwitchTab activeTab={activeTab} onTabChange={handleTabChange} />
      {activeTab === 1 && <ClientDatePicker sendDateInformation={handleDateData}></ClientDatePicker>}
      {activeTab ===2 && <ClientGetInfoSection sendClientInformation={handleClientInformation}/>}
      {activeTab ===3 && <ClientDisplayResults clientPreferences={customerPreference}/>}
      <ClientNavigationButtons
      handleClick={handleClick}
        handleGoBack={handleGoBack}
        >
      </ClientNavigationButtons>
    </Container>
  );
};


