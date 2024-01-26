import { useState } from 'react';
import {SwitchTab} from './SwitchTab';
import { ArrivalDatePicker } from './ArrivalDatePicker';
import { DepartureDatePicker } from './DepartureDatePicker';

export const ClientTabContainer = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabChange = (newTab) => {
    setActiveTab(newTab);
  };

  return (
    <div>
      <SwitchTab activeTab={activeTab} onTabChange={handleTabChange} />
      {activeTab === 1 &&       <ArrivalDatePicker message={"Select an Arrival Date"}/>}
      {activeTab === 2 && <DepartureDatePicker message={"Select a Departure Date"} />}
    </div>
  );
};


