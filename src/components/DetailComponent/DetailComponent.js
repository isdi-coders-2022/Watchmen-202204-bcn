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

const DetailComponent = ({ paintings }) => {
  return (
    <StyledDetailComponent>
      <h2>{paintings[0].title}</h2>
      <p>{paintings[0].longTitle.slice(-4)}</p>
      <h3>{paintings[0].principalOrFirstMaker}</h3>
      <p>{paintings[0].plaqueDescriptionEnglish}</p>
      <h3>Artwork Details</h3>
      <ul>
        <li>Medium: {paintings[0].physicalMedium}</li>
        <li>Dimensions: {paintings[0].subTitle} </li>
        <li>Classification: {paintings[0].objectTypes}</li>
      </ul>
    </StyledDetailComponent>
  );
};

export default DetailComponent;
