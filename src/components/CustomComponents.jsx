import styled from 'styled-components'

export const Grid = styled.div`
flex-direction: row;
display: flex;
width: fit-content;
height: fit-content;
gap: 1rem
`

export const Card = styled.div`
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
transition: 0.3s;
display: flex;
flex-direction: column;
width: 400px;
height: fit-content;
padding: 1rem;
margin-top: 1rem;
border-radius: 10px;
`

export const SearchButton = styled.button`
background-image: linear-gradient(to right, #77A1D3 0%, #79CBCA  51%, #77A1D3  100%);
padding: 0.6rem;
margin-top: 0.3rem;
text-align: center;
text-transform: uppercase;
transition: 0.5s;
background-size: 200% auto;
color: white;            
box-shadow: 0 0 20px #eee;
border-radius: 10px;
width: 370px;
text-decoration: none;
background-position: right center;

&:hover {
    background-position: left center;

  }
`

export const Title = styled.h1`
font-weight: bold;
font-size: 19px;
oadding: 0.5rem;
margin-bottom: 0.5rem;
`

export const NavigationButton = styled.button`
font-size: 13px;
border-color: black;
color: black;
width:100%;
&:hover {
    transform: scale(1.05);
    &.grow {
      transition: all .5s ease-in-out;
    }
  }

`
export const SubText = styled.p`
text-align: left;
font-size: var(--p-font-size-325);
font-weight: 200;
`

export const  BasicContainer = styled.div`
display: flex;
flex-direction: column;
`