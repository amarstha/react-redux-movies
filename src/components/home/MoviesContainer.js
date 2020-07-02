import React, { Component } from "react";
import MovieCard from "./MovieCard";
import { connect } from "react-redux";
import Error from "./404";

class MoviesContainer extends Component {
  render() {
    const { movies } = this.props;
    return (
      <React.Fragment>
        {movies.Response === "True" ? (
          <div className="row">
            {movies.Search &&
              movies.Search.map((movie, index) => (
                <MovieCard key={index} movie={movie} />
              ))}
          </div>
        ) : (
          <Error />
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
});

export default connect(mapStateToProps)(MoviesContainer);
