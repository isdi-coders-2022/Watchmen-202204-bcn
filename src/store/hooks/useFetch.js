import { useCallback, useContext } from "react";
import PaintsContext from "../contexts/paintsContext";
import { useContext } from "react";
import {
  renderingPaintings,
  renderingDetailsPainting,
  fetchingPaintings,
} from "../actions/AppActionsCreator";

const useFetch = () => {
  const { dispatch } = useContext(PaintsContext);

  const getApiData = useCallback(
    (url) => {
      if (url === undefined) {
      }
      (async () => {
        dispatch(fetchingPaintings());
        const response = await fetch(url);

        const paintingsCollection = await response.json();
        dispatch(renderingPaintings(paintingsCollection.artObjects));
      })();
    },
    [dispatch]
  );

  const getApiDetailsData = useCallback(
    (url) => {
      if (url === undefined) {
      }
      (async () => {
        const response = await fetch(url);

        const paintingsCollection = await response.json();
        dispatch(renderingDetailsPainting(paintingsCollection.artObject));
      })();
    },
    [dispatch]
  );

  return { getApiData, getApiDetailsData };
};

export default useFetch;
