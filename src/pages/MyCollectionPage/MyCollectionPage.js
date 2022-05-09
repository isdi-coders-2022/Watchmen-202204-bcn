import InfoComponent from "../../components/InfoComponent/InfoComponent";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import styled from "styled-components";
import IconButtonComponent from "../../components/IconButtonComponent/IconButtonComponent";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useContext, useEffect } from "react";
import PaintsContext from "../../store/contexts/paintsContext";
import useFetch from "../../store/hooks/useFetch";
import MyCollectionComponent from "../../components/MyCollectionComponent/MyCollectionComponent";
import LoadingComponent from "../../components/LoadingComponent/LoadingComponent";

const StyledMyCollectionPage = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
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
    margin-left: 20px;
    top: 10%;
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
    margin: 20px;
    padding: 0;
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

const MyCollectionPage = (action) => {
  const { paintingState } = useContext(PaintsContext);
  const { getMyApiDetails } = useFetch();

  useEffect(() => {
    getMyApiDetails("https://weekartapi.onrender.com/paintings/");
  }, [getMyApiDetails]);

  if (paintingState.loading) {
    return <LoadingComponent />;
  }

  return (
    <>
      <HeaderComponent />
      <StyledMyCollectionPage>
        <InfoComponent
          titleText="MY COLLECTION"
          paragraphText="Filter by presenting date"
        />
        <div className="image-container">
          <MyCollectionComponent paintings={paintingState.paintings} />
        </div>
        <div className="icon-container">
          <NavLink to="/form">
            <IconButtonComponent
              backgroundcolor="#000"
              iconSize="50px"
              iconClassName="marginIcon"
              iconName={faCirclePlus}
              action={() => action}
            />
          </NavLink>
        </div>
      </StyledMyCollectionPage>
    </>
  );
};

export default MyCollectionPage;
