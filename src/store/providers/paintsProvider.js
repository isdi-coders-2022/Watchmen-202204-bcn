import { useReducer } from "react";
import PaintsContext from "../contexts/paintsContext";
import appReducer from "../reducers/appReducer";

const PaintsProvider = ({ children }) => {
  const initialState = { paintings: [], loading: false, painting: undefined };
  const [paintingState, dispatch] = useReducer(appReducer, initialState);

  return (
    <PaintsContext.Provider value={{ paintingState, dispatch }}>
      {children}
    </PaintsContext.Provider>
  );
};

export default PaintsProvider;
