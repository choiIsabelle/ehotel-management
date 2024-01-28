import styled from 'styled-components'
const Text = styled.h1`
padding: 1rem;
font-weight: bold;
font-size: 19px;
`

const Grid = styled.div`
flex-direction: row;
display: flex;
width: fit-content;
height: fit-content;
gap: 1rem
`

const SubText = styled.p`
`

const IconContainer=styled.div`
display: flex;
justify-content: center;
align-items: center;
`

const InnerText = styled.p`
font-weight: bold;
font-size: 14px;
`

const Container = styled.div`
gap: 0.5rem;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
transition: 0.3s;
display: flex;
flex-direction: column;
width: 350px;
height: 250;
padding: 2rem;
border-radius: 10px;
&.grow {
  transition: all .2s ease-in-out;

  &:hover {

  }
}


&:hover {
  background-position: left center;
  transform: scale(1.1);
}
`

const SubmitButton = styled.button`
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

&.grow {
    transition: all .2s ease-in-out;

    &:hover {

    }
  }


&:hover {
    background-position: left center;
    transform: scale(1.1);
  }
`

const InnerCard = styled.div`
margin-top: 1rem;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
background-color: #F1F1F2;
padding: 1rem;
gap: 0.5rem;
display: flex;
flex-direction: column;
`

export const EmployeeTabContainer=()=>{

    return(
      <div>
      <Text>What would you want to do today?</Text>
      <Grid>
        <Container>
          <Text> Manage Bookings</Text>
          <SubText>Search and remove bookings for a client</SubText>
          <InnerCard>
          <InnerText>Delete an existing booking for a client</InnerText>
          <SubmitButton>Remove a booking</SubmitButton>
          </InnerCard>

        </Container>

        <Container>
          <Text> Add Bookings</Text>
          <SubText>Add bookings</SubText>
          <InnerCard>
            <InnerText>Add a new booking for a client</InnerText>
          <SubmitButton>Add a booking</SubmitButton>
          </InnerCard>
        </Container>

        <Container>
        <Text> Update Bookings</Text>
        <SubText>Update arrival/departure date, location, hotel chain, booking type, etc.</SubText>
        <InnerCard>
        <InnerText>Update the reservation details for a client</InnerText>
        <SubmitButton>Update a booking</SubmitButton>
        </InnerCard>
        </Container>

        </Grid>
        </div>

    )
}