import { useCallback, useContext } from "react";
import PaintsContext from "../contexts/paintsContext";
import {
  renderingPaintings,
  renderingDetailsPainting,
  fetchingPaintings,
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

  const getApiDetailsData = useCallback(
    (url) => {
      (async () => {
        dispatch(fetchingPaintings());
        const response = await fetch(url);

        const paintingsCollection = await response.json();
        dispatch(renderingDetailsPainting(paintingsCollection.artObject));
      })();
    },
    [dispatch]
  );

  const getMyApiDetails = useCallback(
    (url) => {
      (async () => {
        dispatch(fetchingPaintings());
        const response = await fetch(url);

        const paintingsCollection = await response.json();
        dispatch(renderingPaintings(paintingsCollection));
      })();
    },
    [dispatch]
  );

  const userCreatedPainting = useCallback(async (userPainting) => {
    const userUploadedPainting = {
      ...userPainting,
      id: userPainting.paintingId,
    };
    await fetch("https://weekartapi.onrender.com/paintings/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userUploadedPainting),
    });
  }, []);

  return {
    getApiData,
    getMyApiDetails,
    getApiDetailsData,
    userCreatedPainting,
  };
};

export default useFetch;
