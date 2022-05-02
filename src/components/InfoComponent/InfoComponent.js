import styled from "styled-components";

const StyledInfoComponent = styled.div`
  color: black;
  h2 {
    font-size: 40px;
  }
  p {
    font-weight: lighter;
    font-size: 20px;
  }
`;
const InfoComponent = ({ titleText, paragraphText }) => {
  return (
    <StyledInfoComponent>
      <h2>{titleText}</h2>
      <p>{paragraphText}</p>
    </StyledInfoComponent>
  );
};

export default InfoComponent;
