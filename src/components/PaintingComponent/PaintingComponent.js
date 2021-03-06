import styled from "styled-components";
import { NavLink } from "react-router-dom";

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

const PaintingComponent = ({ paintings }) => {
  return (
    <>
      <StyledPaintingComponent>
        <ul className="painting">
          {paintings.map((_painting, index) => (
            <NavLink
              to={`/detail/${paintings[index].objectNumber}`}
              state={{ myState: paintings[index].objectNumber }}
              key={`${paintings[index].longTitle}nav&${[index]}`}
            >
              <li
                className="painting_list"
                key={`${paintings[index].id}art&${[index]}`}
              >
                <div
                  className="painting_container"
                  key={`${paintings[index].longTitle}div&${[index]}`}
                >
                  <img
                    className="painting_image"
                    src={paintings[index].webImage.url}
                    alt={paintings[index].title}
                    key={`${paintings[index].longTitle}img&${[index]}`}
                  />
                  <p
                    key={`${paintings[index].longTitle}p&${[index]}`}
                    className="painting_text"
                  >{`${paintings[index].longTitle}`}</p>
                </div>
              </li>
            </NavLink>
          ))}
        </ul>
      </StyledPaintingComponent>
    </>
  );
};

export default PaintingComponent;
