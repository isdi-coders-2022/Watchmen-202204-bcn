import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const StyledIconButtonComponent = styled.div`
  svg {
    font-size: ${(props) => props.size};
    color: ${(props) => props.color};
    opacity: 70%;
    box-shadow: 5px 5px 10px -3px rgba(0, 0, 0, 0.199),
      -5px -5px 15px 3px rgba(255, 255, 255, 0.199);
    border-radius: 50%;
    :hover {
      opacity: 100%;
    }
  }
`;

const IconButtonComponent = ({
  divClassName,
  backgroundcolor,
  iconSize,
  action,
  iconClassName,
  iconName,
}) => {
  return (
    <StyledIconButtonComponent
      className={divClassName}
      onClick={action}
      color={backgroundcolor}
      size={iconSize}
    >
      <FontAwesomeIcon
        data-testid="custom-element"
        className={iconClassName}
        icon={iconName}
      />
    </StyledIconButtonComponent>
  );
};

export default IconButtonComponent;
