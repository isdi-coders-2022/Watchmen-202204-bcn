import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import InfoComponent from "../../components/InfoComponent/InfoComponent";
import ListComponent from "../../components/ListComponent/ListComponent";
import styled from "styled-components";

const StyledWelcomePage = styled.section`
  h2 {
    margin: 0.6em;
  }

  p {
    padding: 0 1.2em;
  }
`;

const WelcomePage = () => {
  return (
    <StyledWelcomePage>
      <HeaderComponent />
      <InfoComponent
        titleText="WELCOME TO OUR GALLERY"
        paragraphText="Here you'll find our weekly collection of our three favourites artist. Take a look and surf to our amazing curated selection."
      />
      <ListComponent />
    </StyledWelcomePage>
  );
};

export default WelcomePage;
