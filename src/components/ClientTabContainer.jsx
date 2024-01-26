import { useState } from 'react';
import SwitchTab from './SwitchTab';
import { CombinedDatePicker } from './CombinedDatePicker';

const TabContainer = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabChange = (newTab) => {
    setActiveTab(newTab);
  };

  return (
    <div>
      <SwitchTab activeTab={activeTab} onTabChange={handleTabChange} />
      {activeTab === 1 &&       <CombinedDatePicker message={"Select an Arrival Date"}/>}
      {/* {activeTab === 2 && <SwitchTabContent2 />} */}
    </div>
  );
};

export default TabContainer;
