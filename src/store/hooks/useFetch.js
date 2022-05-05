import { useCallback } from "react";
import PaintsContext from "../contexts/paintsContext";
import { useContext } from "react";
import { renderingPaintings } from "../actions/AppActionsCreator";

const useFetch = () => {
  const { dispatch } = useContext(PaintsContext);

  const getApiData = useCallback(
    (url) => {
      if (url === undefined) {
      }
      (async () => {
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
