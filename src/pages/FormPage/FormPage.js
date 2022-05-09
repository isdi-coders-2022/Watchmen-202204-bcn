import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import FormComponent from "../../components/FormComponent/FormComponent";
import styled from "styled-components";

const StyledFormPage = styled.div`
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
  .painting_image {
    height: 1000px;
    width: 100%;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 40px;
    object-fit: cover;
  }
`;

const FormPage = () => {
  return (
    <StyledFormPage>
      <HeaderComponent />
      <FormComponent image="/images/background.jpeg" />
    </StyledFormPage>
  );
};

export default FormPage;
