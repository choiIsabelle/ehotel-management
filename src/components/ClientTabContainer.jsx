import { useState } from 'react';
import {SwitchTab} from './SwitchTab';
import { ArrivalDatePicker } from './ArrivalDatePicker';
import { DepartureDatePicker } from './DepartureDatePicker';
import { ClientGetInfoSection } from './ClientGetInfoSection';
import styled from 'styled-components';
import ClientNavigationButtons from './ClientNavigationButtons';

const Container = styled.div`
display: flex;
width: 500px;
height: 500px;
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

  return (
    <Container>
      <SwitchTab activeTab={activeTab} onTabChange={handleTabChange} />
      {activeTab === 1 &&       <ArrivalDatePicker message={"Select an Arrival Date"}/>}
      {activeTab === 2 && <DepartureDatePicker message={"Select a Departure Date"} />}
      {activeTab ===3 && <ClientGetInfoSection/>}
      <ClientNavigationButtons
      handleClick={handleClick}
        handleGoBack={handleGoBack}
        >
      </ClientNavigationButtons>
    </Container>
  );
};


