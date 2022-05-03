import InfoComponent from "../../components/InfoComponent/InfoComponent";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import styled from "styled-components";
import IconButtonComponent from "../../components/IconButtonComponent/IconButtonComponent";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import PaintingComponent from "../../components/PaintingComponent/PaintingComponent";

const StyledCollectionPage = styled.section`
  position: relative;
  .information {
    text-align: left;
    padding: 0 1.2em;
    margin-bottom: 30px;
  }

  .paiting {
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
        titleText="COLLECTION 1"
        paragraphText="Here you'll find our weekly collection of our three favourites artist. Take a look and surf to our amazing curated selection."
      />
      <PaintingComponent image=" https://lh3.googleusercontent.com/cRtF3WdYfRQEraAcQz8dWDJOq3XsRX-h244rOw6zwkHtxy7NHjJOany7u4I2EG_uMAfNwBLHkFyLMENzpmfBTSYXIH_F=w500 " />
      <div className="icon-container">
        <IconButtonComponent
          backgroundcolor="#fff"
          iconSize="50px"
          iconClassName="marginIcon"
          iconName={faCircleArrowLeft}
        />
        <IconButtonComponent
          backgroundcolor="#fff"
          iconSize="50px"
          iconClassName="marginIcon"
          iconName={faCircleArrowRight}
        />
      </div>
    </StyledCollectionPage>
  );
};

export default CollectionPage;
