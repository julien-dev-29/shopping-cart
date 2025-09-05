import styled from "styled-components";

const StyledBadge = styled.div`
  position: absolute;
  font-size: 0.6rem;
  top: -8px;
  left: 30px;
  padding: 2px 8px;
  border-radius: 33%;
  background-color: ${({ theme }) => theme.colors.secondary.base};
`;

const Badge = ({ label }) => {
  return <StyledBadge>{label}</StyledBadge>;
};

export default Badge;
