import styled from "styled-components";
import paintingData from "../../dataTest/paintingData";

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
    width: 417.44px;
    height: 465px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 40px;
    padding: 20px;
    object-fit: cover;
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

const PaintingComponent = ({ action }) => {
  return (
    <>
      <StyledPaintingComponent>
        <ul className="painting">
          {paintingData[0].artObjects.map((_painting, index) => (
            <li
              className="painting_list"
              key={paintingData[0].artObjects[index].id}
            >
              <div className="painting_container" onClick={action}>
                <img
                  className="painting_image"
                  src={paintingData[0].artObjects[index].webImage.url}
                  alt={paintingData[0].artObjects[index].title}
                />
                <p className="painting_text">
                  {`${paintingData[0].artObjects[index].longTitle}`}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </StyledPaintingComponent>
    </>
  );
};

export default PaintingComponent;
