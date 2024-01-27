import { useState } from 'react';
import {SwitchTab} from './SwitchTab';
import { ArrivalDatePicker } from './ArrivalDatePicker';
import { DepartureDatePicker } from './DepartureDatePicker';
import { ClientGetInfoSection } from './ClientGetInfoSection';
import styled from 'styled-components';
import { ClientDisplayResults } from './ClientDisplayResults';

const Container = styled.div`
display: flex;
width: 500px;
height: 500px;
flex-direction: column;

`

export const ClientTabContainer = () => {
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
      {activeTab ===4 && <ClientDisplayResults/>}
    </Container>
  );
};


