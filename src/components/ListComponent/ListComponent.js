const ListComponent = ({ text, image, description }) => {
  return (
    <>
      <ul className="collection">
        <li className="collection_list">
          <div className="collection_container">
            <img className="collection_image" src={image} alt={description} />
            <h3 className="collection_text">{text}</h3>
          </div>
        </li>
      </ul>
    </>
  );
};

export default ListComponent;
