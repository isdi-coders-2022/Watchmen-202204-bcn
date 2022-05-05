import DetailComponent from "../../components/DetailComponent/DetailComponent";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import ImageIconComponent from "../../components/ImageIconComponent/ImageIconComponent";
import detailData from "../../dataTest/detailData";

const DetailPage = () => {
  return (
    <>
      <HeaderComponent />
      <DetailComponent />
      <ImageIconComponent
        image={detailData[0].artObject.webImage.url}
        description={detailData[0].artObject.title}
      />
    </>
  );
};

export default DetailPage;
