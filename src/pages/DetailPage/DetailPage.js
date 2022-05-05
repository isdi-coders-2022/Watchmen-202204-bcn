import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import DetailComponent from "../../components/DetailComponent/DetailComponent";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import ImageIconComponent from "../../components/ImageIconComponent/ImageIconComponent";
import LoadingComponent from "../../components/LoadingComponent/LoadingComponent";
import { addPaintingsTypes } from "../../store/actions/AppActionsTypes";
import PaintsContext from "../../store/contexts/paintsContext";
import useFetch from "../../store/hooks/useFetch";

const DetailPage = () => {
  const { dispatch, paintingState } = useContext(PaintsContext);
  const { getApiDetailsData } = useFetch();

  const location = useLocation();

  useEffect(() => {
    getApiDetailsData(
      `https://www.rijksmuseum.nl/api/en/collection/${location.state.myState}?key=jjq73gPu`
    );
  }, [getApiDetailsData, location.state.myState]);

  const addItem = () => {
    const newPainting = paintingState.painting;

    dispatch(addPaintingsTypes(newPainting));
  };

  if (paintingState.loading) {
    return <LoadingComponent />;
  }

  return paintingState.painting ? (
    <>
      <HeaderComponent />
      <DetailComponent painting={paintingState.painting} />
      <ImageIconComponent
        image={paintingState.painting.webImage.url}
        description={paintingState.painting.description}
        onAddItem={addItem}
      />
    </>
  ) : (
    <p>No painting found.</p>
  );
};

export default DetailPage;
