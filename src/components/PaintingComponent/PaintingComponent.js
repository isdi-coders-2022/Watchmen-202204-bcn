import styled from "styled-components";

const StyledPaintingComponent = styled.div`
  .painting {
    list-style: none;
    padding-left: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  .painting_list {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2%;
  }

  .painting_container {
    position: relative;

    margin: 20px;
    padding: 20px;
    width: 345;
    text-align: center;
  }
  .painting_image {
    height: 425px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 40px;
    padding: 20px;
  }

  .painting_text {
    color: white;
    position: absolute;
    top: 75%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: lighter;
  }
`;

const PaintingComponent = ({ text, image, description }) => {
  return (
    <>
      <StyledPaintingComponent>
        <ul className="painting">
          <li className="painting_list">
            <div className="painting_container">
              <img className="painting_image" src={image} alt={description} />
              <p className="painting_text">{text}</p>
            </div>
          </li>
        </ul>
      </StyledPaintingComponent>
    </>
  );
};

export default PaintingComponent;
