import styled from "styled-components";
const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: none;
  border-radius: ${({type}) => type  === "error" ? "16px" : "4px"};
  padding: 8px 16px;
  background-color: ${({ theme, type }) =>
    type === "error" ? theme.colors.error.base : theme.colors.primary.base};
  color: white;
  transition: background-color 0.1s, transform 0.1s;
  &:hover {
    filter: brightness(85%);
  }
  &:active {
    filter: brightness(100%);
    transform: translateY(0.5px);
  }
`;

const Button = ({ children, type, handleClick }) => {
  return (
    <StyledButton onClick={handleClick} type={type}>
      {children}
    </StyledButton>
  );
};

export default Button;
