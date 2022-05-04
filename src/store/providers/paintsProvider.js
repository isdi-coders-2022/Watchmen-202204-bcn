import { useReducer } from "react";
import { paintingDataTestPage2 } from "../../dataTest/paintingData";
import PaintsContext from "../contexts/paintsContext";
import appReducer from "../reducers/appReducer";

const PaintsProvider = ({ children }) => {
  const initialState = [];
  const [paintings, dispatch] = useReducer(appReducer, initialState);

  return (
    <PaintsContext.Provider value={{ paintings, dispatch }}>
      {children}
    </PaintsContext.Provider>
  );
};

export default PaintsProvider;
