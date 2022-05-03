import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import CollectionPage from "./pages/CollectionPage/CollectionPage";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import DetailPage from "./pages/DetailPage/DetailPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/collection" element={<CollectionPage />} />
        <Route path="/detail" element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
