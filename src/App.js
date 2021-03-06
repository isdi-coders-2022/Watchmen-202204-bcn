import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import CollectionPage from "./pages/CollectionPage/CollectionPage";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import DetailPage from "./pages/DetailPage/DetailPage";
import MyCollectionPage from "./pages/MyCollectionPage/MyCollectionPage";
import PaintsProvider from "./store/providers/paintsProvider";
import CollectionPage2 from "./pages/CollectionPage2/CollectionPage2";
import CollectionPage3 from "./pages/CollectionPage3/CollectionPage3";
import FormPage from "./pages/FormPage/FormPage";

function App() {
  return (
    <div className="App">
      <PaintsProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/rembrandtvanrijn" element={<CollectionPage />} />
          <Route path="/johannesvermeer" element={<CollectionPage2 />} />
          <Route path="/maartenvanheemskerck" element={<CollectionPage3 />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/mycollection" element={<MyCollectionPage />} />
          <Route path="/form" element={<FormPage />} />
        </Routes>
      </PaintsProvider>
    </div>
  );
}

export default App;
