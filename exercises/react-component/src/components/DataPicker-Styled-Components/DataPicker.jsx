import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-family: sans-serif;
`;

const Input = styled.input`
  padding: 10px;
  border: 2px solid #646cff;
  border-radius: 4px;
  outline: none;
  &:focus {
    border-color: #535bf2;
  }
`;

const DatePicker = () => {
  return (
    <Container>
      <label>Selecione uma data:</label>
      <Input type="date" />
    </Container>
  );
};

export default DatePicker;