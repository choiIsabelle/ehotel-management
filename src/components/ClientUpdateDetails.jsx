import styled from 'styled-components'
import * as CustomComponents from './CustomComponents';
import { CondensedInput } from './CondensedInput';
import {LockIcon} from './icons/LockIcon'
import {PersonIcon} from './icons/PersonIcon'
import { useState } from 'react';
import { SpinnerOnSubmit } from './SpinnerOnSubmit';
import { ClientUpdatePaymentDetails } from './ClientUpdatePaymentDetails';
import { ClientUpdateUserDetails } from './ClientUpdateUserDetails';

//TODO: finish this for the client view of updating their personal information or payment information

const IconContainer = styled.div`
justify-content: center;
display: flex;
`

const Container = styled.div`
justify-content: center;
display: flex;
flex-direction: column;
`

export const ClientUpdateDetails=()=>{
    const [currentUser, setCurrentUser] = useState('Temp user');
    const [foundAccount, setFoundAccount] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const [isSearching, setIsSearching] = useState(false);
    const handleFoundAccount=()=>{
        setIsSearching(true)
        setTimeout(()=>{
            setIsSearching(false)
            setShowDetails(true)
            setFoundAccount(true)
          }, 1500)
        

    }

    return(
        <Container>
           {!showDetails &&  <CustomComponents.Card>
                <IconContainer>
                {!foundAccount && <LockIcon></LockIcon>}
                </IconContainer>
        <CondensedInput
        msg={"Search for your account using your SSN"}
        title={"Locate your account using your SSN"}
        subMsg={"Enter your 8-digit SSN"}
        >
        </CondensedInput>
        <CustomComponents.SearchButton
        onClick={handleFoundAccount}
        >Search
        </CustomComponents.SearchButton>
        {isSearching && <SpinnerOnSubmit></SpinnerOnSubmit>}
            </CustomComponents.Card> }
           { foundAccount && 
           <div>
           <Container>
            <CustomComponents.Card>
            <IconContainer>
            <PersonIcon></PersonIcon>
            </IconContainer>
            <CustomComponents.Title>    
                Welcome, {currentUser}
            </CustomComponents.Title>
            </CustomComponents.Card>
            </Container>
            <CustomComponents.Grid>
            <ClientUpdateUserDetails/>
            <ClientUpdatePaymentDetails/>
            </CustomComponents.Grid>
            </div>
            }
            
        </Container>
    )
}