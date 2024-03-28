import {useState} from 'react'
import { CondensedInput } from './CondensedInput'
import * as Custom from './CustomComponents'
import styled from 'styled-components'

export const DeletionButton = styled.button`
background-image: linear-gradient(to right, #990000 40%, #f34624  70%, #fc5d1a  100%);
padding: 0.6rem;
margin-top: 0.3rem;
text-align: center;
text-transform: uppercase;
transition: 0.5s;
background-size: 200% auto;
color: white;            
box-shadow: 0 0 20px #eee;
border-radius: 10px;
width: 370px;
text-decoration: none;
background-position: right center;

&:hover {
    background-position: left center;

  }
`

const ClientDeleteUserAccount = () => {
    const [ssn, setSSN] = useState()
    
    const handleDeleteAccount=async()=>{

    }
    return(
        <Custom.Card className='updatePaymentDetails-container' style={{width:'fit-content'}}>
            <CondensedInput
            title={"Delete User Account"}
            msg='Enter the SSN of the account you would like to delete'
            subMsg={'Deleting an account is not reversable.'}
            handleChange={(e)=>setSSN(e.target.value)}
            handleClick={()=>setSSN('')}
            valueLabel={ssn}
            >
            </CondensedInput>
            <DeletionButton
            onClick={ e=> handleDeleteAccount(e)}>
                Delete Account
                </DeletionButton>
            
        </Custom.Card>
    )

}

export default ClientDeleteUserAccount
