import styled from 'styled-components'

const StyledInput = styled.input`
`

const Title = styled.h3`
font-size: 16px;
padding: 0.3rem;
font-weight: 600;
`
const Text = styled.p`
text-align: left;
font-size: var(--p-font-size-325);
font-weight: 400;
`
const SubText = styled.p`
text-align: left;
font-size: var(--p-font-size-325);
font-weight: 200;
`

const Container = styled.div`
display: flex;
flex-direction: column;
`

export const CondensedInput=({title ,msg, subMsg})=>{
    return(
        <Container>
            <Title>{title}</Title>
            <Text>{msg}</Text>
        <StyledInput></StyledInput>
        <SubText>{subMsg}</SubText>
        </Container>

    )
}