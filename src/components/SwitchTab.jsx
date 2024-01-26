import {Pagination} from '@shopify/polaris';
import styled from 'styled-components';

const PaginationContainer = styled.div`
display: flex;
width: 100%;
position: fixed;
flex-direction: row;
gap: 10px;
`
export const SwitchTab=({activeTab, onTabChange})=> {
  const validTabValues = [1, 2, 3]
    const displayPrev=()=>{
        onTabChange(activeTab - 1)
    }

    
    const displayNext=()=>{
      if(validTabValues.includes(activeTab)){
        onTabChange(activeTab + 1)}
    }

  return (
        <PaginationContainer>
    <Pagination
hasPrevious={activeTab > 1}
      onPrevious={displayPrev}
      hasNext={validTabValues.includes(activeTab)}
      onNext={displayNext}
    />
    </PaginationContainer>
  );
}