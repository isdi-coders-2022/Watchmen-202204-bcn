import { faCircleXmark, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import styled from "styled-components";
import { deletePaintings } from "../../store/actions/AppActionsCreator";
import { editPaintingsTypes } from "../../store/actions/AppActionsTypes";
import PaintsContext from "../../store/contexts/paintsContext";
import IconButtonComponent from "../IconButtonComponent/IconButtonComponent";

const StyledMyCollectionComponent = styled.div`
  .painting {
    list-style: none;
    padding-left: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  .painting_list {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2%;
  }

  .painting_container {
    position: relative;

    margin: 20px;
    padding: 20px;
    width: 345;
    text-align: center;
  }
  .painting_image {
    width: 417.44px;
    height: 465px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 40px;
    padding: 20px;
    object-fit: cover;
  }

  .painting_text {
    color: white;
    position: absolute;
    top: 75%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: lighter;
  }
`;

const MyCollectionComponent = ({ paintings }) => {
  const { dispatch } = useContext(PaintsContext);

  return (
    <>
      <StyledMyCollectionComponent>
        <ul className="painting">
          {paintings.map((_painting, index) => (
            <li className="painting_list" key={paintings[index].id}>
              <div className="painting_container">
                <img
                  className="painting_image"
                  src={paintings[index].webImage.url}
                  alt={paintings[index].title}
                />
                <p className="painting_text">{`${paintings[index].longTitle}`}</p>
                <div className="image-container-icons">
                  <IconButtonComponent
                    divClassName="prova"
                    action={() => editPaintingsTypes}
                    backgroundcolor="#fff"
                    iconSize="50px"
                    iconClassName="painting_icon"
                    iconName={faUserCircle}
                  />
                  <IconButtonComponent
                    divClassName="prova2"
                    action={() => dispatch(deletePaintings(index))}
                    backgroundcolor="#fff"
                    iconSize="50px"
                    iconClassName="painting_icon"
                    iconName={faCircleXmark}
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </StyledMyCollectionComponent>
    </>
  );
};

export default MyCollectionComponent;
