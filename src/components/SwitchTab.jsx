import {Pagination} from '@shopify/polaris';
import { useState } from 'react';
import styled from 'styled-components';

const DisplayMessage = styled.h4`
text-size: 13;
`

const PaginationContainer = styled.div`
display: flex;
flex-direction: row;
gap: 10px;
`

export const SwitchTab=()=> {

    const [isArrival, setIsArrival ] = useState(true)

    const displayPrev=()=>{
        setIsArrival(true)
    }

    
    const displayNext=()=>{
        setIsArrival(false)
    }

    const msg = isArrival ? "Setting Arrival Date" : "Setting Departure Date"

  return (
    <div>
        <PaginationContainer>
           <DisplayMessage> {msg}</DisplayMessage>
    <Pagination
      hasPrevious
      // write callback function handlesubmit
      onPrevious={displayPrev}
      hasNext
      onNext={displayNext}
    />
    </PaginationContainer>
    </div>
  );
}