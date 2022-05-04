import DetailComponent from "../../components/DetailComponent/DetailComponent";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import ImageIconComponent from "../../components/ImageIconComponent/ImageIconComponent";

const DetailPage = () => {
  return (
    <>
      <HeaderComponent />
      <DetailComponent />
      <ImageIconComponent image="/images/background.jpeg" />
    </>
  );
};

export default DetailPage;
