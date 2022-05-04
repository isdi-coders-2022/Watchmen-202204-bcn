import { useReducer } from "react";
import PaintsContext from "../contexts/paintsContext";
import appReducer from "../reducers/appReducer";

const PaintsProvider = ({ children }) => {
  const initialState = [];
  const [paints, dispatch] = useReducer(appReducer, initialState);
  return (
    <PaintsContext.Provider value={{ paintings: paints, dispatch }}>
      {children}
    </PaintsContext.Provider>
  );
};

export default PaintsProvider;
