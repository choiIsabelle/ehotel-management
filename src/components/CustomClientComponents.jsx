import styled from 'styled-components'

export const DatepickerContainer = styled.div`
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

export const Title = styled.h3`
font-weight: 600;
margin-bottom: 1rem;
margin-top: 2rem;
font-size: 22px;
`

export const SubButton = styled.button`
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
    background-position: left center;
  }
`

export const CurrentDateText = styled.p`
font-size: 13px;
font-weight: bold;
margin-top: 0.5rem;
margin-bottom: 1rem;
`
export const ButtonContainer = styled.div`
display: flex;
margin-top: 1rem;
align-items: center;
flex-start: right;
gap: 1rem;
flex-direction row;
`