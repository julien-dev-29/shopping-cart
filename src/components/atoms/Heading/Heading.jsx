import styled from "styled-components";

const StyledHeading = styled.h1`
  margin: 0;
  color: ${({ theme }) => theme.colors.text.primary};
`;

const Heading = ({ label, ...props }) => {
  return <StyledHeading {...props}>{label}</StyledHeading>;
};
export default Heading;
