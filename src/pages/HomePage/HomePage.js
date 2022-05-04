import InfoComponent from "../../components/InfoComponent/InfoComponent";
import styled from "styled-components";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import { NavLink } from "react-router-dom";

const StyledHomePage = styled.div`
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url("/images/background.jpeg");

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 100vh;

  @media (max-width: 700px) {
    .menu li {
      filter: invert(100%);
    }
  }

  .button {
    position: relative;
    top: 70%;
    z-index: 1;
    word-wrap: break-word;
    max-width: 100%;
  }
  .top-nav {
    filter: invert(100%);
  }

  .information {
    position: absolute;
    padding: 1.3em;
  }
  .information_title {
    color: white;
    margin-bottom: 50px;
  }
  .information_text {
    color: white;
  }
`;
const HomePage = () => {
  return (
    <StyledHomePage>
      <HeaderComponent />

      <InfoComponent
        titleText={"WELCOME TO OUR GALLERY"}
        paragraphText={
          "Weekart is an online gallery that prodives artistic content in a weekly base. Here you will find our most fresh selection during the last week from our community and curators. Take a look and collect your most favorite art by hitting the button Explore below!"
        }
      />
      <NavLink to="/welcome">
        <ButtonComponent backgroundcolor={"#C65A4B"} text={"Explore"} />
      </NavLink>
    </StyledHomePage>
  );
};

export default HomePage;
