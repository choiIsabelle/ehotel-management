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

export const Card = styled.div`
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
transition: 0.3s;
display: flex;
flex-direction: column;
width: 850px;
height: fit-content;
padding: 1rem;
margin-top: 2rem;
margin-left: 2rem;
border-radius: 10px;
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
           <Card>
            <IconContainer>
            <PersonIcon></PersonIcon>
            </IconContainer>
            <CustomComponents.Title>    
                Welcome, {currentUser}
            </CustomComponents.Title>
            </Card>
            <CustomComponents.Grid>
            <ClientUpdateUserDetails/>
            <ClientUpdatePaymentDetails/>
            </CustomComponents.Grid>
            </div>
            }
            
        </Container>
    )
}