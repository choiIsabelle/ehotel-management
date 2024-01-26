import {Pagination} from '@shopify/polaris';
import styled from 'styled-components';

const DisplayMessage = styled.h4`
text-size: 13;
`

const PaginationContainer = styled.div`
display: flex;
width: 100%;
position: fixed;
flex-direction: row;
gap: 10px;
`


export const SwitchTab=({activeTab, onTabChange})=> {
    const displayPrev=()=>{
        onTabChange(activeTab - 1);
    }

    
    const displayNext=()=>{
        onTabChange(activeTab + 1);
    }

  return (
        <PaginationContainer>
    <Pagination
hasPrevious={activeTab > 1}
      onPrevious={displayPrev}
      hasNext
      onNext={displayNext}
    />
    </PaginationContainer>
  );
}