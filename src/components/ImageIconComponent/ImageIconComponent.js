import styled from "styled-components";
import IconButtonComponent from "../IconButtonComponent/IconButtonComponent";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

const StyledImageIconComponent = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 0 1.2em 1.2em;
  position: relative;
  .painting_image {
    width: 100vw;
    height: 465px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 40px;
    object-fit: cover;
  }
  .painting_actions {
    position: absolute;
    display: flex;
    left: 40px;
    bottom: 40px;
    align-items: center;
    h2 {
      color: #fff;
      opacity: 70%;
      margin: 0 0 0 20px;
      font-size: 36px;
    }
  }
`;

const ImageIconComponent = ({
  image,
  description,
  divClassName,
  iconAction,
}) => {
  return (
    <StyledImageIconComponent>
      <img className="painting_image" src={image} alt={description} />
      <div className="painting_actions">
        <IconButtonComponent
          divClassName={divClassName}
          action={iconAction}
          backgroundcolor="#fff"
          iconSize="50px"
          iconClassName="painting_icon"
          iconName={faCirclePlus}
        />
        <h2>Add Item</h2>
      </div>
    </StyledImageIconComponent>
  );
};

export default ImageIconComponent;
