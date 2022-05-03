import styled from "styled-components";

const StyledInfoComponent = styled.div`
  h2 {
    font-size: 40px;
    color: ${(props) => props.color};
  }
  p {
    font-weight: lighter;
    font-size: 20px;
    color: ${(props) => props.color};
  }
`;
const InfoComponent = ({ titleText, paragraphText, fontColor }) => {
  return (
    <StyledInfoComponent color={fontColor}>
      <div className="information">
        <h2 className="information_title">{titleText}</h2>
        <p className="information_text">{paragraphText}</p>
      </div>
    </StyledInfoComponent>
  );
};

export default InfoComponent;
