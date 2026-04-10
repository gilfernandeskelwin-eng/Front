import styled from 'styled-components';

const StyledButton = styled.button`
    background-color: ${props => props.secondary ? '#0f95ee' : '#007BFF'};
    color: white;
    border: 10px
`;

export function ButtonStyled() {
    return (
        <StyledButton secondary={secondary}>
            {text}
        </StyledButton>
    );
}