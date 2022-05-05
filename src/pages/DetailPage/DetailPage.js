import DetailComponent from "../../components/DetailComponent/DetailComponent";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import ImageIconComponent from "../../components/ImageIconComponent/ImageIconComponent";
import { useContext } from "react";
import PaintsContext from "../../store/contexts/paintsContext";
import useFetch from "../../store/hooks/useFetch";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const DetailPage = () => {
  const { paintings } = useContext(PaintsContext);
  const { getApiDetailsData } = useFetch();

  const location = useLocation();
  useEffect(() => {
    getApiDetailsData(
      `https://www.rijksmuseum.nl/api/en/collection/${location.state.myState}?key=jjq73gPu`
    );
  }, [getApiDetailsData, location.state.myState]);
  return (
    <>
      <HeaderComponent />
      <DetailComponent paintings={paintings} />
      <ImageIconComponent
        image={paintings[0].webImage.url}
        description={paintings[0].description}
      />
    </>
  );
};

export default DetailPage;
