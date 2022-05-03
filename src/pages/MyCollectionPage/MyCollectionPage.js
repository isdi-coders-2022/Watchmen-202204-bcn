import InfoComponent from "../../components/InfoComponent/InfoComponent";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import styled from "styled-components";
import IconButtonComponent from "../../components/IconButtonComponent/IconButtonComponent";
import {
  faCirclePlus,
  faCircleXmark,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import PaintingComponent from "../../components/PaintingComponent/PaintingComponent";

const StyledMyCollectionPage = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  .information {
    text-align: left;
    padding: 0 1.2em;
    margin-bottom: 30px;
  }

  .image-container {
    position: relative;
    width: 417.44px;
    height: 465px;
  }

  .image-container-icons {
    display: flex;
    position: absolute;
    justify-content: space-around;
    width: 417.44px;
    top: 13%;
  }

  .prova {
    margin-right: 150px;
  }

  .information_text {
    text-decoration: underline;
    text-align: center;
    margin: 0;
  }

  .painting_list {
    margin: 0;
    width: 100vw;
  }

  .painting_container {
    margin: 0;
  }

  .icon-container {
    display: flex;
    position: fixed;
    width: 100vw;
    bottom: 10%;
    justify-content: center;
    .marginIcon {
      margin: 0 70px;
    }
  }
`;

const MyCollectionPage = (iconAction) => {
  return (
    <StyledMyCollectionPage>
      <HeaderComponent />
      <InfoComponent
        titleText="MY COLLECTION"
        paragraphText="Filter by presenting date"
      />
      <div className="image-container">
        <PaintingComponent
          text="Dynamic image text information (Working on it)"
          image=" https://lh3.googleusercontent.com/cRtF3WdYfRQEraAcQz8dWDJOq3XsRX-h244rOw6zwkHtxy7NHjJOany7u4I2EG_uMAfNwBLHkFyLMENzpmfBTSYXIH_F=w500 "
        />
        <div className="image-container-icons">
          <IconButtonComponent
            divClassName="prova"
            action={iconAction}
            backgroundcolor="#fff"
            iconSize="50px"
            iconClassName="painting_icon"
            iconName={faUserCircle}
          />
          <IconButtonComponent
            divClassName="prova2"
            action={iconAction}
            backgroundcolor="#fff"
            iconSize="50px"
            iconClassName="painting_icon"
            iconName={faCircleXmark}
          />
        </div>
      </div>
      <div className="icon-container">
        <IconButtonComponent
          backgroundcolor="#fff"
          iconSize="50px"
          iconClassName="marginIcon"
          iconName={faCirclePlus}
        />
      </div>
    </StyledMyCollectionPage>
  );
};

export default MyCollectionPage;
