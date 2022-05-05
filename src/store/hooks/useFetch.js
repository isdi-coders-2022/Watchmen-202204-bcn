import { useCallback, useContext } from "react";
import PaintsContext from "../contexts/paintsContext";
import {
  fetchingPaintings,
  renderingPaintings,
} from "../actions/AppActionsCreator";

const useFetch = () => {
  const { dispatch } = useContext(PaintsContext);

  const getApiData = useCallback(
    (url) => {
      (async () => {
        dispatch(fetchingPaintings());
        const response = await fetch(url);
        const paintingsCollection = await response.json();
        dispatch(renderingPaintings(paintingsCollection.artObjects));
      })();
    },
    [dispatch]
  );

  return { getApiData };
};

export default useFetch;
