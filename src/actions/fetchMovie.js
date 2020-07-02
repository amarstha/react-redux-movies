import axios from "axios";
import { APIKEY } from "../APIKey";
import { FETCH_MOVIE } from "./type";

export const fetchMovie = (id) => (dispatch) => {
  axios.get(`https://www.omdbapi.com/?apikey=${APIKEY}&i=${id}`).then((res) =>
    dispatch({
      type: FETCH_MOVIE,
      payload: res.data,
    })
  );
};
