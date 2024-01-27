import styled from 'styled-components'

const Card = styled.div`
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
transition: 0.3s;
display: flex;
flex-direction: column;
width: 400px;
height: 600px;
padding: 1rem;
margin-top: 2rem;
margin-left: 2rem;
border-radius: 10px;
`

export const ClientDisplayResults=()=>{
    return(
        <Card>
            <h1>Review the results of your search!</h1>


        </Card>
    )
}