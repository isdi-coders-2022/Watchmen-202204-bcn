import styled from "styled-components";

const StyledButtonComponent = styled.button`
  height: 55px;
  width: 330px;
  background-color: ${(props) => props.backgroundcolor};
  color: #ffffff;
  border-radius: 20px;
  border-style: none;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  font-size: 20px;
  opacity: 70%;
  box-shadow: 5px 5px 10px -3px rgba(0, 0, 0, 0.199),
    -5px -5px 15px 3px rgba(255, 255, 255, 0.199);
  :hover {
    opacity: 100%;
  }
`;

const ButtonComponent = ({ backgroundcolor, text, action }) => {
  return (
    <StyledButtonComponent backgroundcolor={backgroundcolor} onClick={action}>
      {text}
    </StyledButtonComponent>
  );
};

export default ButtonComponent;
