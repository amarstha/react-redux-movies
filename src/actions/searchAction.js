const { SEARCH_MOVIE } = require("./type");

export const searchMovie = (text) => {
  return {
    type: SEARCH_MOVIE,
    payload: text,
  };
};
