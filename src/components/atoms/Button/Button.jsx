import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.colors.primary.base};
  color: white;
  transition: background-color 0.1s, transform 0.1s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.hover};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.primary.active};
    transform: translateY(0.5px);
  }
`;

const Button = ({ label, handleClick }) => {
  return <StyledButton onClick={handleClick}>{label}</StyledButton>;
};

export default Button;
