import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Title = styled.h3`
    color: green;
    text-transform: uppercase;
    font-weight: 700;
`

export const ContactStyled = ({ data: { phone, address, email} }) => {
    return (
        <Container>
            <Title>TEL</Title>
            <p>{phone}</p>
            <Title>ADRES</Title>
            <p>{address.street} {address.number}, {address.city}</p>
            <Title>EMIAL</Title>
            <p>{email}</p>
        </Container>
    )
}