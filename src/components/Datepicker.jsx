import { DatePicker } from '@shopify/polaris';
import { useState, useCallback } from 'react';
import styled from 'styled-components';

const DatepickerContainer = styled.div`
  width: 40%;
  box-shadow: 0 2px 9px rgba(0, 0, 0, 0.2);
  display: flex;
  padding:1rem;
  width: 35%;
  height: 20%;
  background-color: white;
  justify-content: center;
  border-radius: 25px;
  margin: auto;
  align-items: center;
  flex-direction: column;
  gap: 0.4rem;
`;

const Title = styled.h3`
font-weight: 600;
font-size: 19px;
`

const EmphTitle = styled.h3`
font-weight: bold;
font-size: 19px;
padding: 0.5rem;
color: blue;
`

const SubButton = styled.button`
display:inline-block;
padding:0.3em 1.2em;
margin:0 0.1em 0.1em 0;
background-color: blue;
border:0.3rem solid blue;
border-radius:2em;
box-sizing: border-box;
text-decoration:none;
font-family:'Roboto',sans-serif;
font-weight:300;
color:white;
text-shadow: 0 0.04em 0.04em rgba(0,0,0,0.35);
text-align:center;
outline: none;
`

export const Datepicker=(props)=> {
    const {message} = props;
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

  return (
    <>
      <DatepickerContainer>
      <Title>{message} <EmphTitle> {formattedDate}</EmphTitle></Title>
        <DatePicker
          month={month}
          year={year}
          onChange={setSelectedDates}
          onMonthChange={handleMonthChange}
          selected={selectedDates}
        />
        <SubButton>Submit</SubButton>
      </DatepickerContainer>

    </>
  );
}

