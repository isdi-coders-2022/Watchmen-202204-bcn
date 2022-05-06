import InfoComponent from "../../components/InfoComponent/InfoComponent";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import styled from "styled-components";
import IconButtonComponent from "../../components/IconButtonComponent/IconButtonComponent";
import {
  faSquareCaretLeft,
  faSquareCaretRight,
} from "@fortawesome/free-solid-svg-icons";
import PaintingComponent from "../../components/PaintingComponent/PaintingComponent";
import { useContext, useEffect } from "react";
import PaintsContext from "../../store/contexts/paintsContext";
import useFetch from "../../store/hooks/useFetch";
import LoadingComponent from "../../components/LoadingComponent/LoadingComponent";

const StyledCollectionPage = styled.section`
  position: relative;
  .information {
    padding: 0 1.2em;
    margin-bottom: 30px;
  }

  .painting_list {
    margin: 0;
    width: 100vw;
  }

  .painting_image {
    padding: 0;
  }
  .painting_container {
    margin: 0;
  }

  .icon-container {
    display: flex;
    position: fixed;
    width: 100vw;
    bottom: 10%;
    justify-content: space-between;

    .marginIcon {
      margin: 0 70px;
    }
  }
`;

const CollectionPage = () => {
  const { paintingState } = useContext(PaintsContext);
  const { getApiData } = useFetch();

  useEffect(() => {
    getApiData(
      "https://www.rijksmuseum.nl/api/en/collection/?key=jjq73gPu&format=json&involvedMaker=Rembrandt+van+Rijn&p=0&ps=15&imgonly=True&artist=relevance"
    );
  }, [getApiData]);

  if (paintingState.loading) {
    return <LoadingComponent />;
  }

  return (
    <StyledCollectionPage>
      <HeaderComponent />
      <InfoComponent
        titleText={"Rembrandt van Rijn"}
        paragraphText="Here you'll find our weekly collection of one of our three favourites artist. Take a look and surf to our amazing curated selection."
      />
      <PaintingComponent paintings={paintingState.paintings} />
      <div className="icon-container">
        <IconButtonComponent
          backgroundcolor="#fff"
          iconSize="50px"
          iconClassName="marginIcon"
          iconName={faSquareCaretLeft}
        />
        <div className="icon-container">
          <IconButtonComponent
            backgroundcolor="#fff"
            iconSize="50px"
            iconClassName="marginIcon"
            iconName={faSquareCaretLeft}
          />
          <IconButtonComponent
            backgroundcolor="#fff"
            iconSize="50px"
            iconClassName="marginIcon"
            iconName={faSquareCaretRight}
          />
        </div>
      </div>
    </StyledCollectionPage>
  );
};

export default CollectionPage;
