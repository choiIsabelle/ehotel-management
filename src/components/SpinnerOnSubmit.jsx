import {Spinner} from '@shopify/polaris';
import styled from 'styled-components'

const SpinnerContainer = styled.div`
margin-top: 0.5rem;
`

export const SpinnerOnSubmit=()=> {
  return(
  <SpinnerContainer><Spinner accessibilityLabel="Small spinner example" size="small" />
  </SpinnerContainer>);
}