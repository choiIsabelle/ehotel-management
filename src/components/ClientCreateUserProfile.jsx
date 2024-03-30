import {useState} from 'react'
import * as c from './CustomComponents'
import { CondensedInput } from './CondensedInput'
import { ClientGoBackChevronButton } from './ClientChevronLeftButton';

export const ClientCreateUserProfile = ({handleGoBack}) => {
    const [ssn, setSNN] = useState()
    const [name, setName] = useState()
    const [address, setAddress] = useState()
    const [age, setAge] = useState()
    const [phoneNumber, setPhoneNumber] = useState()
    const [creditCard, setCreditCard] = useState()
    const date = new Date()

    const createUserAccount=async()=>{
        try {
            const response = await fetch(`http://localhost:5000/customer`,{
                method:"POST",
                headers:{"Content-Type": "application/json"},
                body: JSON.stringify({
                    SSN: ssn, 
                    full_name: name, 
                    age: age, 
                    address: address, 
                    date_of_registration: date,
                    phoneNumber: phoneNumber, 
                    credit_card_number: creditCard
                })})
                console.log(response)
                if(response.ok){
                    alert("User succesfully created!")
                } 
        } catch (error) {
            console.error("Could not add new user" , error.message)
        }

    }

  return (
    <div>
         <ClientGoBackChevronButton 
            handleClick={handleGoBack}/>
    <c.Card stlye={{marginTop: 0}}>
        <CondensedInput
        title="Create Your User Account"
        msg="What is your SSN?"
        subMsg="Your SSN is a 8-digit number like 12398712"
        handleChange={(e)=>setSNN(e.target.value)}
        valueLabel={ssn}
        />
        <CondensedInput
        msg="What is your Full Name?"
        subMsg="Enter your name"
        handleChange={(e)=>setName(e.target.value)}
        valueLabel={name}
        />
        <CondensedInput
        msg="How old are you?"
        subMsg="Enter your age"
        handleChange={(e)=>setAge(e.target.value)}
        valueLabel={age}
        />
        <CondensedInput
        msg="What is your Address?"
        subMsg="Enter your address"
        handleChange={(e)=>setAddress(e.target.value)}
        valueLabel={address}
        />
        <CondensedInput
        msg="What is your Phone Number?"
        subMsg="Enter your Phone Number"
        handleChange={(e)=>setPhoneNumber(e.target.value)}
        valueLabel={phoneNumber}
        />
        <CondensedInput
        msg="What is your Credit Card Number?"
        subMsg="Enter your  Credit Card Number"
        handleChange={(e)=>setCreditCard(e.target.value)}
        valueLabel={creditCard}
        />
        <c.SearchButton
        onClick={createUserAccount}
        >Create User Account
        </c.SearchButton>
      
    </c.Card>
        </div>
  )
}
