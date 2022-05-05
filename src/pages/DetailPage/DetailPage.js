import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import DetailComponent from "../../components/DetailComponent/DetailComponent";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import ImageIconComponent from "../../components/ImageIconComponent/ImageIconComponent";
import { addPaintingsTypes } from "../../store/actions/AppActionsTypes";
import PaintsContext from "../../store/contexts/paintsContext";
import useFetch from "../../store/hooks/useFetch";

const DetailPage = () => {
  const { dispatch, paintings } = useContext(PaintsContext);
  const { getApiDetailsData } = useFetch();

  const location = useLocation();

  useEffect(() => {
    console.warn(location);
    if (location.state) {
      getApiDetailsData(
        `https://www.rijksmuseum.nl/api/en/collection/${location.state.myState}?key=jjq73gPu`
      );
    }
  }, [getApiDetailsData, location]);

  const addItem = () => {
    const newPainting = paintings[0];

    dispatch(addPaintingsTypes(newPainting));
  };

  return paintings ? (
    <>
      <HeaderComponent />
      <DetailComponent paintings={paintings} />
      <ImageIconComponent
        image={paintings[0].webImage.url}
        description={paintings[0].description}
        onAddItem={addItem}
      />
    </>
  ) : (
    <p>Tuputamadre</p>
  );
};

export default DetailPage;
