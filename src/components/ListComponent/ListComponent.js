import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledListComponent = styled.div`
  .collection {
    list-style: none;
    padding-left: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  .collection_list {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2%;
  }

  .collection_container {
    position: relative;

    margin: 20px;
    padding: 20px;
    width: 345;
    text-align: center;
  }

  .collection_image--overlay {
    background: black;
    overflow: hidden;
    width: 338px;
    height: 310px;
    filter: drop-shadow(0px 6px 6px rgba(1, 0, 0, 8.45));
    border-radius: 40px;
  }
  .collection_image {
    object-fit: cover;
    opacity: 0.6;
    width: 338px;
    height: 310px;
    filter: drop-shadow(0px 6px 6px rgba(1, 0, 0, 8.45));
    border-radius: 40px;
  }

  .collection_text {
    color: white;
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: 600;
    font-size: 30px;
  }
`;

const ListComponent = ({ _text, _image, description, action }) => {
  return (
    <>
      <StyledListComponent>
        <ul className="collection">
          <NavLink to="/rembrandtvanrijn">
            <li className="collection_list">
              <div className="collection_container" onClick={action}>
                <div className="collection_image--overlay">
                  <img
                    className="collection_image"
                    src={
                      "https://lh3.googleusercontent.com/AyiKhdEWJ7XmtPXQbRg_kWqKn6mCV07bsuUB01hJHjVVP-ZQFmzjTWt7JIWiQFZbb9l5tKFhVOspmco4lMwqwWImfgg=s0"
                    }
                    alt={description}
                  />
                </div>
                <h3 className="collection_text">Rembrandt van Rijn</h3>
              </div>
            </li>
          </NavLink>
        </ul>
        <ul className="collection">
          <NavLink to="/johannesvermeer">
            <li className="collection_list">
              <div className="collection_container" onClick={action}>
                <div className="collection_image--overlay">
                  <img
                    className="collection_image"
                    src={
                      "https://lh3.googleusercontent.com/GQkZDpSbiMBU8tVbuYw_n8M4HOV5Q7ftA_ywibsh3718_ZrVPssGTtVC5spGM9OJyFOnoncB2u3I3DfuR_-9cdduDRMIbEN-Hzgf9AvDyA=w500"
                    }
                    alt={description}
                  />
                </div>
                <h3 className="collection_text">Johannes Vermeer</h3>
              </div>
            </li>
          </NavLink>
        </ul>
        <ul className="collection">
          <NavLink to="/maartenvanheemskerck">
            <li className="collection_list">
              <div className="collection_container" onClick={action}>
                <div className="collection_image--overlay">
                  <img
                    className="collection_image"
                    src={
                      "https://lh3.googleusercontent.com/4QGG5BGKXaVXzAMfbR-PdZp_9TW_dECAxqXQ-fZwaTxK43O-MRp-zadtiQem4xSr7H_leSg7AyOWZkpqjeF37rTobbo=w500"
                    }
                    alt={description}
                  />
                </div>
                <h3 className="collection_text">Maarten van Heemskerck</h3>
              </div>
            </li>
          </NavLink>
        </ul>
      </StyledListComponent>
    </>
  );
};

export default ListComponent;
