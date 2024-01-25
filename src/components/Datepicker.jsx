import { DatePicker } from '@shopify/polaris';
import { useState, useCallback } from 'react';
import styled from 'styled-components';

const DatepickerContainer = styled.div`
  width: 40%;
  box-shadow: 0 2px 9px rgba(0, 0, 0, 0.2);
  display: flex;
  padding: 2rem;
  background-color: white;
  justify-content: center;
  border-radius: 25px;
  margin: auto;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
`;

const Title = styled.h3`
font-weight: 600;
font-size: 19px;
`

const EmphTitle = styled.h3`
font-weight: bold;
font-size: 19px;
padding: 0.5rem;
color: green;
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
      </DatepickerContainer>

    </>
  );
}

