import { useState } from "react";
import styled from "styled-components";
import useFetch from "../../store/hooks/useFetch";

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
    height: 1000px;
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
  .button {
    position: relative;
    top: 70%;
    z-index: 1;
    word-wrap: break-word;
    max-width: 100%;
    margin: 0 0 12px 0;
    border-radius: 10px;
    height: 55px;
    width: 330px;
    background-color: #c65a4b;
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
  }
`;

const FormComponent = ({ image, description, heading1, heading2 }) => {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState(0);
  const [artist, setArtist] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [medium, setMedium] = useState("");
  const [classification, setClassification] = useState("");
  const [dimension, setDimension] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const createPainting = {
      longTitle: title,
      year: parseInt(year),
      artist,
      webImage: { url: imageLink },
      medium,
      classification,
      dimension,
    };

    userCreatedPainting(createPainting);
  };

  const { userCreatedPainting } = useFetch();

  return (
    <StyledFormComponent>
      <h2>{heading1}</h2>
      <div className="formContainer">
        <img className="painting_image" src={image} alt={description} />
        <form onSubmit={handleSubmit} className="form">
          <label className="label" htmlFor="title">
            Title
          </label>
          <input
            className="input"
            id="title"
            type="text"
            onChange={(event) => setTitle(event.target.value)}
          ></input>

          <label className="label" htmlFor="year">
            Year
          </label>
          <input
            className="input"
            id="year"
            type="number"
            onChange={(event) => setYear(event.target.value)}
          ></input>

          <label className="label" htmlFor="artist">
            Artist
          </label>
          <input
            className="input"
            id="artist"
            type="text"
            onChange={(event) => setArtist(event.target.value)}
          ></input>

          <label className="label" htmlFor="link-image">
            Link Image
          </label>
          <input
            className="input"
            id="link-image"
            type="text"
            onChange={(event) => setImageLink(event.target.value)}
          ></input>

          <h3>{heading2}</h3>

          <label className="label" htmlFor="medium">
            Medium
          </label>
          <input
            className="input"
            id="medium"
            type="text"
            onChange={(event) => setMedium(event.target.value)}
          ></input>

          <label className="label" htmlFor="classification">
            Classification
          </label>
          <input
            className="input"
            id="classification"
            type="text"
            onChange={(event) => setClassification(event.target.value)}
          ></input>

          <label className="label" htmlFor="dimension">
            Dimensions
          </label>
          <input
            className="input"
            id="dimension"
            type="text"
            onChange={(event) => setDimension(event.target.value)}
          ></input>
          <button type="submit" className="button" value="Send">
            Send
          </button>
        </form>
      </div>
    </StyledFormComponent>
  );
};

export default FormComponent;
