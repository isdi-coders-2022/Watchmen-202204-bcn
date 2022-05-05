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

const DetailComponent = ({ painting }) => {
  return (
    <StyledDetailComponent>
      <h2>{painting.title}</h2>
      <p>{painting.longTitle.slice(-4)}</p>
      <h3>{painting.principalOrFirstMaker}</h3>
      <p>{painting.plaqueDescriptionEnglish}</p>
      <h3>Artwork Details</h3>
      <ul>
        <li>Medium: {painting.physicalMedium}</li>
        <li>Dimensions: {painting.subTitle} </li>
        <li>Classification: {painting.objectTypes}</li>
      </ul>
    </StyledDetailComponent>
  );
};

export default DetailComponent;
