import styled from "styled-components";
import detailData from "../../dataTest/detailData";

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

const DetailComponent = () => {
  return (
    <StyledDetailComponent>
      <h2>{detailData[0].artObject.title}</h2>
      <p>{detailData[0].artObject.dating.presentingDate}</p>
      <h3>{detailData[0].artObject.principalMaker}</h3>
      <p>{detailData[0].artObject.label.description}</p>
      <h3>Artwork Details</h3>
      <ul>
        <li>Medium: {detailData[0].artObject.physicalMedium}</li>
        <li>Dimensions: {detailData[0].artObject.subTitle} </li>
        <li>Classification: {detailData[0].artObject.objectTypes}</li>
        <li>Credit Line: {detailData[0].artObject.acquisition.creditLine}</li>
      </ul>
    </StyledDetailComponent>
  );
};

export default DetailComponent;
