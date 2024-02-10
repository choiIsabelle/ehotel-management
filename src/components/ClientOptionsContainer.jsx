import React, { useState } from 'react'
import styled from 'styled-components'
import {ClientUpdateDetails} from './ClientUpdateDetails'
import {ClientTabContainer} from './ClientTabContainer'
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

const h1 ="What would you want to do today?"

class ClientOptionsContainer extends React.Component {

    constructor(props){
        super(props)
        this.state={
            booking: false,
            update: false   
        };
        // bind to the current instance of ClientOptionsContainer;
        this.handleBooking = this.handleBooking.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleNavigate = this.handleNavigate.bind(this);
        this.handleGoBack = this.handleGoBack.bind(this);
    }
    handleBooking() {
        this.setState({ booking: true });
      }
    
      handleUpdate() {
        this.setState({ update: true });
      }

      handleNavigate(page){
        console.log('current value of the page is', page)
        if(page === 'add'){
          this.setState({booking: true})
          this.setState({ update: false });
        }
        if(page=== 'update'){
          this.setState({booking: false})
          this.setState({ update: true });
        }

      }
      handleGoBack(){
        console.log('triggered at go back')
        this.setState({booking: false,  update: false})
      }


    render(){
        return(
            <div>
                {!this.state.booking && !this.state.update &&
                <div>
            <Text>{h1}</Text>
            <Grid>
              <Container>
                <Text>Add a booking</Text>
                <SubText>Search for a hotel based on your date, location, and room preferences</SubText>
                <InnerCard>
                <InnerText>Start looking for hotels</InnerText>
                <SubmitButton
                onClick={this.handleBooking}
                >
                    Start a booking
                    </SubmitButton>
                </InnerCard>
              </Container>

              <Container>
                <Text> Manage User Details</Text>
                <SubText>Update your booking details or add a payment detail</SubText>
                <InnerCard>
                <InnerText>Booking and payment updates</InnerText>
                <SubmitButton
                onClick={this.handleUpdate}
                >Change details
                
                </SubmitButton>
                </InnerCard>
              </Container>
              </Grid>
              </div>
                }
                {this.state.update && 
                <ClientUpdateDetails
                handleNavigate={(page)=> this.handleNavigate(page)}
                handleGoBack={ this.handleGoBack}

                >
                </ClientUpdateDetails>}
                {this.state.booking && 
                <ClientTabContainer
                handleClick={(page)=> this.handleNavigate(page)}
                handleGoBack={ this.handleGoBack}

                ></ClientTabContainer>}
              </div>
        )
    }

}

export default ClientOptionsContainer