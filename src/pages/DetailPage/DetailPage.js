import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import DetailComponent from "../../components/DetailComponent/DetailComponent";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import ImageIconComponent from "../../components/ImageIconComponent/ImageIconComponent";
import LoadingComponent from "../../components/LoadingComponent/LoadingComponent";
import { addPaintings } from "../../store/actions/AppActionsCreator";
import PaintsContext from "../../store/contexts/paintsContext";
import useFetch from "../../store/hooks/useFetch";

const DetailPage = (painting) => {
  const { dispatch, paintingState } = useContext(PaintsContext);
  const { getApiDetailsData } = useFetch();
  const location = useLocation();

  useEffect(() => {
    getApiDetailsData(
      `https://www.rijksmuseum.nl/api/en/collection/${location.pathname.slice(
        8
      )}?key=jjq73gPu`
    );
  }, [getApiDetailsData, location.pathname]);

  const dispatchPainting = () => {
    dispatch(addPaintings(paintingState.painting));
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
        onAddItem={() => dispatchPainting(paintingState.painting)}
      />
    </>
  ) : (
    <p>No painting found.</p>
  );
};

export default DetailPage;
