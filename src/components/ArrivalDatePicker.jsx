import { DatePicker } from '@shopify/polaris';
import { useState, useCallback } from 'react';
import styled from 'styled-components';

const DatepickerContainer = styled.div`
  box-shadow: 0 2px 9px rgba(0, 0, 0, 0.2);
  background-color: white;
  justify-content: center;
  border-radius: 25px;
  margin: auto;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
display: flex;
flex-direction: column;
width: 400px;
height: 400px;
padding: 2rem;
`;

const Title = styled.h3`
font-weight: 600;
margin-bottom: 1rem;
margin-top: 2rem;
font-size: 22px;
`

const EmphTitle = styled.h3`
font-weight: bold;
font-size: 18px;
padding: 0.5rem;
color: blue;
`

const SubButton = styled.button`
background-image: linear-gradient(to right, #77A1D3 0%, #79CBCA  51%, #77A1D3  100%);
margin: 10px;
padding: 15px 45px;
text-align: center;
text-transform: uppercase;
transition: 0.5s;
background-size: 200% auto;
color: white;            
box-shadow: 0 0 20px #eee;
border-radius: 10px;
display: block;
text-decoration: none;
background-position: right center;

&:hover {
    background-position: left center; /* change the direction of the change here */
  }
`

const SwitchTabContainer = styled.div`
display: flex;
flex-direction row;
align-items: baseline;
gap:6rem;
`
const CurrentDateText = styled.p`
font-size: 13px;
font-weight: bold;
margin-top: 0.5rem;
margin-bottom: 1rem;
`
const ButtonContainer = styled.div`
display: flex;
margin-top: 1rem;
align-items: center;
margin-bottom: 1rem;
flex-start: right;
gap: 1rem;
flex-direction row;
`

export const ArrivalDatePicker=(props)=> {
    const {message} = props;
    const [arrivalSubmit, setArrivalSubmit] = useState(false)
    const subMsg = "Submit arrival"

  const [{ month, year }, setDate] = useState({ month: 1, year: 2024 });
  const [selectedDates, setSelectedDates] = useState({
    start: new Date('Wed Feb 07 2024 00:00:00 GMT-0500 (EST)'),
    end: new Date('Wed Feb 07 2024 00:00:00 GMT-0500 (EST)'),
  });

  const handleMonthChange = useCallback((month, year) => setDate({ month, year }), []);

  const formattedDate = selectedDates.start.toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  // TODO: used for database call
  const dateParts = formattedDate.split('/');
  const [monthPart, dayPart, yearPart] = dateParts;

  const handleSubmit=()=>{
        setArrivalSubmit(true)
    }

  return (
    <>
      <DatepickerContainer>
      {/* <EmphTitle> {formattedDate}</EmphTitle> */}
      <Title>{message} </Title>
        <DatePicker
          month={month}
          year={year}
          onChange={setSelectedDates}
          onMonthChange={handleMonthChange}
          selected={selectedDates}
        />
        <ButtonContainer>
        <SubButton onClick={()=>handleSubmit()}>{subMsg}</SubButton>
        {arrivalSubmit && <CurrentDateText>Your chosen date of arrival is: {formattedDate}</CurrentDateText>}
        </ButtonContainer>
      </DatepickerContainer>

    </>
  );
}

