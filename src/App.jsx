import './App.css'
import { AppProvider } from '@shopify/polaris';
import '@shopify/polaris/build/esm/styles.css';
import enTranslations from '@shopify/polaris/locales/en.json';
import Navbar from './components/Navbar';
import { useState } from 'react';
import styled from 'styled-components'
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
        <ClientOptionsContainer/>
      }

        {(currentPage === 'client') && <ClientOptionsContainer></ClientOptionsContainer>}

        {currentPage === 'employeeW' &&
        <EmployeeTabContainer/>
           }

         {(currentPage ==="employee" ) && <EmployeeTabContainer/>}

{/* TODO: Implement specific way of handling onclicks to navigate to the respective pages for each role */}
        {currentPage === 'hotelOwnerW' &&
         <HotelOwnerTabContainer/>}

         {currentPage ==="hotelOwner" && 
         <HotelOwnerTabContainer></HotelOwnerTabContainer>
         }
         {/* TODO: just for testing purposes */}
         {/* {currentPage === 'test' &&
         <ClientDatePicker
         message="test"
         >
          </ClientDatePicker>} */}

        </main>
      </AppProvider>
  )
}

export default App
