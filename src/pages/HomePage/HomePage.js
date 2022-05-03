import InfoComponent from "../../components/InfoComponent/InfoComponent";
import styled from "styled-components";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";

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

  .menu li {
    filter: invert(100%);
  }

  .button {
    margin-top: 50%;
  }
  .top-nav {
    filter: invert(100%);
  }

  .information {
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
      <ButtonComponent backgroundcolor={"#C65A4B"} text={"Explore"} />
    </StyledHomePage>
  );
};

export default HomePage;
