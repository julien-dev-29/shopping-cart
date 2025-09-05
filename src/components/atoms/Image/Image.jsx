import styled from "styled-components";

const StyledImage = styled.img`
  height: auto;
  max-height: 100%;
  width: 100%;
  display: block;
  object-fit: cover;
  transition: transform 0.3s ease;
`;

const Image = ({ src, alt = "Image", ...props }) => {
  return <StyledImage src={src} alt={alt} {...props}></StyledImage>;
};

export default Image;
