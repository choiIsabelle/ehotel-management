import { DatePicker } from '@shopify/polaris';
import { useState, useCallback } from 'react';
import * as c from './CustomClientComponents';
import { ConfirmationModel } from './ConfirmationModel';
import styled from 'styled-components'
// import Test1 from './Test1';

const Test = styled.div`
  text-indent: 0;
  transition: text-indent var(--hh-duration-default, 0.2s), transform var(--hh-duration-default, 0.2s);

  &:hover {
    text-indent: 1rem;
    // transform: translate3d(-891.333px, 0, 0); 
  }
`;

const DateSelector=({message, handleDate, onDateChange})=>{

  const [{ month, year }, setDate] = useState({ month: 1, year: 2024 });
  
  const [selectedDates, setSelectedDates] = useState({
    start: new Date('Wed Feb 07 2024 00:00:00 GMT-0500 (EST)'),
    end: new Date('Wed Feb 07 2024 00:00:00 GMT-0500 (EST)'),
  });

  const handleMonthChange = useCallback((month, year) => setDate({ month, year }), []);

  const handleChange=(newSelectedDates)=>{
    setSelectedDates(newSelectedDates);
    onDateChange(newSelectedDates.start.toLocaleDateString('en-US').split('/'));
  }

  const formattedDate = selectedDates.start.toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  // TODO: used for database call
  const dateParts = formattedDate.split('/');
  // eslint-disable-next-line no-unused-vars
  const [monthPart, dayPart, yearPart] = dateParts;

return(
    <c.DatepickerContainer>
      <c.Title>{message}</c.Title>
        <DatePicker
          month={month}
          year={year}
          onChange={handleChange}
          onMonthChange={handleMonthChange}
          selected={selectedDates}
        />
      </c.DatepickerContainer>
)
}

export const ClientDatePicker=({sendDateInformation})=> {
  const [isModalOpen, setIsModelOpen] = useState(false);
  const [arrivalDate, setArrivalDate] = useState(null);
  const [departureDate, setDepartureDate] = useState(null);


  const validateDateSubmission=()=>{
    let validDateCheck = ((parseInt(arrivalDate[0]) > parseInt(departureDate[0])) || (( parseInt(arrivalDate[1]) < parseInt(departureDate[1])) && ( parseInt(arrivalDate[0]) ===  parseInt(departureDate[0]))));
    if(validDateCheck){
      setIsModelOpen(true);
      sendDateInformation( arrivalDate, departureDate)
      return;
    }
    else if (!validDateCheck){
    alert("Error! arrival date: " + arrivalDate[1] + " is later than given departure date: "+ departureDate[1])
    return;
  }
}

  const handleArrivalSubmit=(dateParts)=>{
    setArrivalDate(dateParts)
}

const handleDepartureSubmit=(dateParts)=>{
  setDepartureDate(dateParts)
}

const handleCloseModal=()=>{
  setIsModelOpen(false);
}

  return (
    <div style={{ display:'flex', flexDirection:'column', justifyContent:'center'}}>
      {/* <Test1>Here</Test1> */}
      <c.Title>Select Your Booking Dates</c.Title>
    <div style={{display:'flex', flexDirection:'row', gap:'0.5rem'}}>
    <DateSelector
    className="ClientDatePicker-Arrival"
    message="Select an arrival date"
    handleDate={handleArrivalSubmit}
    onDateChange={(newSelectedDates)=> setArrivalDate(newSelectedDates)}
    >
    </DateSelector>
    <DateSelector
    className="ClientDatePicker-Departure"
    message="Select a departure date"
    handleDate={handleDepartureSubmit}
    onDateChange={(newSelectedDates)=> setDepartureDate(newSelectedDates)}
    >
    </DateSelector>
    </div>
    <c.ButtonContainer>
        <c.SubButton 
            id='ClientDatePicker-SubmissionButton'
            style={{margin:'auto'}}
            onClick={validateDateSubmission}
            >
            Submit date
            </c.SubButton>
      <ConfirmationModel
          style={{height:'100rem'}}       
          isOpen={isModalOpen} 
          onRequestClose={handleCloseModal} 
          message= "Date submitted"
            ></ConfirmationModel>
        </c.ButtonContainer>
    </div>
  );
}
