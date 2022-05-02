import styled from "styled-components";

const StyledDetailComponent = styled.section`
  text-align: left;
  padding: 1.2em;

  ul {
    list-style: none;
    padding-left: 0;
  }

  li {
    padding: 7px 0;
    font-weight: bolder;
  }
`;

const DetailComponent = ({
  heading1,
  pharagraphtext1,
  heading2,
  pharagraphtext2,
  heading3,
  mediumText,
  dimensionsText,
  classificationText,
  creditLineText,
}) => {
  return (
    <StyledDetailComponent>
      <h2>{heading1}</h2>
      <p>{pharagraphtext1}</p>
      <h3>{heading2}</h3>
      <p>{pharagraphtext2}</p>
      <h3>{heading3}</h3>
      <ul>
        <li>Medium: {mediumText}</li>
        <li>Dimensions:{dimensionsText} </li>
        <li>Classification: {classificationText}</li>
        <li>Credit Line: {creditLineText}</li>
      </ul>
    </StyledDetailComponent>
  );
};

export default DetailComponent;
