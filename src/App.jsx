import './App.css'
import {Datepicker} from './components/Datepicker'
import { AppProvider } from '@shopify/polaris';
import '@shopify/polaris/build/esm/styles.css';
import enTranslations from '@shopify/polaris/locales/en.json';
import { CheckboxForm } from './components/CheckboxForm';
import Navbar from './components/Navbar';
import { useState } from 'react';
import { ClientTabContainer } from './components/ClientTabContainer';
import { SwitchTab } from './components/SwitchTab';
import styled from 'styled-components'
import { ClientWelcome } from './components/ClientWelcome';


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

function App() {

  const [currentPage, setCurrentPage] = useState('clientW')

  const handleNavigate=(page)=>{
    setCurrentPage(page);
    console.log(page)

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
        {currentPage === 'client' && <ClientTabContainer></ClientTabContainer>}
        {currentPage === 'clientW' && <ClientWelcome></ClientWelcome>}

        </main>
      </AppProvider>
  )
}

export default App
