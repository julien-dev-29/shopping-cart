import styled from "styled-components";
const Wrapper = styled.div``;
const InputWrapper = styled.div`
  display: flex;
`;
const Label = styled.label`
  display: block;
  margin-bottom: 4px;
`;
const Input = styled.input`
  border-radius: 3px;
  border: none;
  outline: 1px solid ${({ theme }) => theme.colors.neutral.tint};
  padding: 8px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.backgrounds.lighter};
  color: ${({ theme }) => theme.colors.text.primary};
  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.secondary.base};
  }
`;
const LabeledInput = ({ handleInputChange, quantity, setQuantity }) => {
  return (
    <Wrapper>
      <Label>Qté:</Label>
      <InputWrapper>
        <Input type="number" onChange={handleInputChange} value={quantity} />
        <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        <button
          onClick={() => setQuantity((prev) => (prev > 0 ? prev - 1 : prev))}
        >
          -
        </button>
      </InputWrapper>
    </Wrapper>
  );
};
export default LabeledInput;
