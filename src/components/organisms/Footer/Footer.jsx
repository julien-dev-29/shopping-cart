import styled from "styled-components";

const StyledFooter = styled.footer`
  padding: 24px;
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text.primary};
  background-color: ${({ theme }) => theme.colors.backgrounds.lighter};
`;

const Footer = () => {
  return <StyledFooter>
    <span>© 2025 - @JuR0ll All rights reserved</span>
  </StyledFooter>;
};

export default Footer;
