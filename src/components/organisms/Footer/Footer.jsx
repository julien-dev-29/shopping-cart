import styled from "styled-components";

const StyledFooter = styled.footer`
  padding: 24px;
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text.primary};
  background-color: ${({ theme }) => theme.colors.backgrounds.lighter};
`;

const Footer = () => {
  return <StyledFooter>Footer</StyledFooter>;
};

export default Footer;
