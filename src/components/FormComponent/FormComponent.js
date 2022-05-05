import styled from "styled-components";

const StyledFormComponent = styled.section`
  text-align: left;
  padding: 1.2em;

  h2 {
    font-size: 40px;
  }

  h3 {
    color: #fff;
    font-size: 32px;
  }

  .formContainer {
    position: relative;
    height: 1000px;
  }

  .painting_image {
    height: 100%;
    width: 100%;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 20px;
  }

  .form {
    position: absolute;
    top: 0;
    margin: 1.2em;
    width: 87%;
  }

  .label {
    display: block;
    padding: 15px 0;
    font-size: 24px;
    font-weight: bolder;
    color: #fff;
  }

  .input {
    height: 45px;
    width: 98%;
    margin: 0 0 12px 0;
    border-radius: 10px;
    border: none;
  }
`;

const FormComponent = ({
  image,
  description,
  heading1,
  _itemForm1,
  _inputId,
  _inputType,
  heading2,
}) => {
  return (
    <StyledFormComponent>
      <h2>{heading1}</h2>
      <div className="formContainer">
        <img className="painting_image" src={image} alt={description} />
        <form className="form">
          <label className="label" htmlFor="title">
            Title
          </label>
          <input className="input" id="title" type="text"></input>

          <label className="label" htmlFor="year">
            Year
          </label>
          <input className="input" id="year" type="number"></input>

          <label className="label" htmlFor="artist">
            Artist
          </label>
          <input className="input" id="artist" type="text"></input>

          <label className="label" htmlFor="link-image">
            Link Image
          </label>
          <input className="input" id="link-image" type="text"></input>

          <h3>{heading2}</h3>

          <label className="label" htmlFor="medium">
            Medium
          </label>
          <input className="input" id="medium" type="text"></input>

          <label className="label" htmlFor="classification">
            Classification
          </label>
          <input className="input" id="classification" type="text"></input>

          <label className="label" htmlFor="dimension">
            Dimensions
          </label>
          <input className="input" id="dimension" type="text"></input>

          <label className="label" htmlFor="credit-line">
            CreditLine
          </label>
          <input className="input" id="credit-line" type="text"></input>
        </form>
      </div>
    </StyledFormComponent>
  );
};

export default FormComponent;
