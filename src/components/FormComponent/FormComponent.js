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
    height: 100vh;
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
  itemForm1,
  inputId,
  inputType,
  heading2,
}) => {
  return (
    <StyledFormComponent>
      <h2>{heading1}</h2>
      <div className="formContainer">
        <img className="painting_image" src={image} alt={description} />
        <form className="form">
          <label className="label" htmlFor={itemForm1}>
            Title
          </label>
          <input className="input" id={inputId} type={inputType}></input>
          <label className="label" htmlFor={itemForm1}>
            Year
          </label>
          <input className="input" id={inputId} type={inputType}></input>
          <label className="label" htmlFor={itemForm1}>
            Artist
          </label>
          <input className="input" id={inputId} type={inputType}></input>
          <label className="label" htmlFor={itemForm1}>
            Link Image
          </label>
          <input className="input" id={inputId} type={inputType}></input>
          <h3>{heading2}</h3>
          <label className="label" htmlFor={itemForm1}>
            Medium
          </label>
          <input className="input" id={inputId} type={inputType}></input>
          <label className="label" htmlFor={itemForm1}>
            Classification
          </label>
          <input className="input" id={inputId} type={inputType}></input>
          <label className="label" htmlFor={itemForm1}>
            Dimensions
          </label>
          <input className="input" id={inputId} type={inputType}></input>
          <label className="label" htmlFor={itemForm1}>
            CreditLine
          </label>
          <input className="input" id={inputId} type={inputType}></input>
        </form>
      </div>
    </StyledFormComponent>
  );
};

export default FormComponent;
