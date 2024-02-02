import './App.css'
import { AppProvider } from '@shopify/polaris';
import '@shopify/polaris/build/esm/styles.css';
import enTranslations from '@shopify/polaris/locales/en.json';
import Navbar from './components/Navbar';
import { useState } from 'react';
import { ClientTabContainer } from './components/ClientTabContainer';
import styled from 'styled-components'
import { ClientWelcome } from './components/ClientWelcome';
import { EmployeeTabContainer } from './components/EmployeeTabContainer';
import {HotelOwnerTabContainer } from './components/HotelOwnerTabContainer'
import { GeneralWelcomePage } from './components/GeneralWelcomePage';
import ClientOptionsContainer from './components/ClientOptionsContainer';


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

function App() {

  const [currentPage, setCurrentPage] = useState('genWelcome')

  const handleNavigate=(page)=>{
    setCurrentPage(page);
    console.log(page)

  }

  const handleShowBooking=()=>{
    setCurrentPage('client')
  }

  const handleShowManageBookings=()=>{
    setCurrentPage('employee')
  }

  const handleShowManageHotels=()=>{
    setCurrentPage('hotelOwner')
  }



  return (
      <AppProvider i18n={enTranslations}>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <header>
        <Wrapper>
        <Navbar onNavigate={handleNavigate} />
      </Wrapper>
      </header>
      <main>

        { currentPage === 'genWelcome' && <GeneralWelcomePage onNavigate={handleNavigate}/>}

        {/* entry page for the user */}

        {currentPage === 'clientW' &&
         <ClientWelcome 
         title="Welcome, Customer"
         subTitle="To use the eHotel Management System, access the Booking portal"
         innermsg="Ready to start a booking?"
         subMsg="Go to hotels"
         role='client'
         handleOnClick={handleShowBooking}
         > </ClientWelcome>}

        {(currentPage === 'client') && <ClientOptionsContainer></ClientOptionsContainer>}

        {currentPage === 'employeeW' &&
         <ClientWelcome 
         title="Welcome, Employee"
         subTitle="To use the eHotel Management System, access the Booking portal"
         innermsg="Ready to start managing bookings?"
         subMsg="Go to Bookings"
         role='employee'
         handleOnClick={handleShowManageBookings}
         > </ClientWelcome>}

         {(currentPage ==="employee" ) && <EmployeeTabContainer></EmployeeTabContainer>}

{/* TODO: Implement specific way of handling onclicks to navigate to the respective pages for each role */}
        {currentPage === 'hotelOwnerW' &&
         <ClientWelcome 
         title="Welcome, Hotel Owner"
         subTitle="To use the eHotel Management System, access the Booking portal"
         innermsg="Ready to start managing hotel offerings?"
         subMsg="Go to hotel offerings"
         role='hotelOwner'
         handleOnClick={handleShowManageHotels}
         > </ClientWelcome>}

         {currentPage ==="hotelOwner" && 
         <HotelOwnerTabContainer></HotelOwnerTabContainer>
         }



        </main>
      </AppProvider>
  )
}

export default App
