import InfoComponent from "../../components/InfoComponent/InfoComponent";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import styled from "styled-components";
import IconButtonComponent from "../../components/IconButtonComponent/IconButtonComponent";
import {
  faSquareCaretLeft,
  faSquareCaretRight,
} from "@fortawesome/free-solid-svg-icons";
import PaintingComponent from "../../components/PaintingComponent/PaintingComponent";
import paintingData from "../../dataTest/paintingData";
import { NavLink } from "react-router-dom";

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
  return (
      <StyledCollectionPage>
        <HeaderComponent />
        <InfoComponent
          titleText={"ARTIST NAME"}
        paragraphText="Here you'll find our weekly collection of one of our three favourites artist. Take a look and surf to our amazing curated selection."
      />
      <NavLink to="/detail">
        <PaintingComponent image=" https://lh3.googleusercontent.com/cRtF3WdYfRQEraAcQz8dWDJOq3XsRX-h244rOw6zwkHtxy7NHjJOany7u4I2EG_uMAfNwBLHkFyLMENzpmfBTSYXIH_F=w500 " />
      </NavLink>
      <div className="icon-container">
        <IconButtonComponent
          backgroundcolor="#fff"
          iconSize="50px"
          iconClassName="marginIcon"
          iconName={faSquareCaretLeft}
        />
        <PaintingComponent image=" https://lh3.googleusercontent.com/cRtF3WdYfRQEraAcQz8dWDJOq3XsRX-h244rOw6zwkHtxy7NHjJOany7u4I2EG_uMAfNwBLHkFyLMENzpmfBTSYXIH_F=w500 " />
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
      </StyledCollectionPage>
    </div>
  );
};

export default CollectionPage;
