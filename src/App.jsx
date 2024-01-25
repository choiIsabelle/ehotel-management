import './App.css'
import {Datepicker} from './components/Datepicker'
import { AppProvider } from '@shopify/polaris';
import '@shopify/polaris/build/esm/styles.css';
import enTranslations from '@shopify/polaris/locales/en.json';
import { CheckboxForm } from './components/CheckboxForm';
import Navbar from './components/Navbar';
import { useState } from 'react';
import { CombinedDatePicker } from './components/CombinedDatePicker';
function App() {

  const [currentPage, setCurrentPage] = useState('')

  const handleNavigate=(page)=>{
    setCurrentPage(page);
    console.log(page)

  }

  return (
      <AppProvider i18n={enTranslations}>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <header>
        <Navbar onNavigate={handleNavigate} />
      </header>
      <main>
      <CombinedDatePicker message={"Your arrival date is"}></CombinedDatePicker>
        <CheckboxForm></CheckboxForm>
        </main>
      </AppProvider>
  )
}

export default App
