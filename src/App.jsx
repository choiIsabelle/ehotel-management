import './App.css'
import Datepicker from './components/Datepicker'
import { AppProvider } from '@shopify/polaris';
import '@shopify/polaris/build/esm/styles.css';
import enTranslations from '@shopify/polaris/locales/en.json';
import { CheckboxForm } from './components/CheckboxForm';

function App() {

  return (
    <>
    <div>
      <AppProvider i18n={enTranslations}>
        <Datepicker></Datepicker>
        <CheckboxForm></CheckboxForm>
      </AppProvider>
    </div>
    </>
  )
}

export default App
