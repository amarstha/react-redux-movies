import { FETCH_MOVIES } from "./type";
import axios from "axios";
import { APIKEY } from "../APIKey";

export const fetchMovies = (text) => (dispatch) => {
  axios.get(`https://www.omdbapi.com/?apikey=${APIKEY}&s=${text}`).then((res) =>
    dispatch({
      type: FETCH_MOVIES,
      payload: res.data,
    })
  );
};
