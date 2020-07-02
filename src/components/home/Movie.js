import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchMovie } from "../../actions/fetchMovie";
import Spinner from "../layouts/Spinner";
import { setLoading } from "../../actions/loading";

class Movie extends Component {
  componentDidMount() {
    this.props.fetchMovie(this.props.match.params.id);
    this.props.setLoading();
  }
  render() {
    const { movie, loading } = this.props;
    let movieInfo = (
      <div className="container">
        <div className="row">
          <div className="col-md-4 card card-body">
            <img src={movie.Poster} className="thumbnail" alt="Poster" />
          </div>
          <div className="col-md-8">
            <h2 className="mb-4">{movie.Title}</h2>
            <ul className="list-group">
              <li className="list-group-item">
                <strong>Genre:</strong>&nbsp;
                {movie.Genre}
              </li>
              <li className="list-group-item">
                <strong>Released:</strong>&nbsp;
                {movie.Released}
              </li>
              <li className="list-group-item">
                <strong>Rated:</strong>&nbsp;{movie.Rated}
              </li>
              <li className="list-group-item">
                <strong>IMDB Rating:</strong>&nbsp;{movie.imdbRating}
              </li>
              <li className="list-group-item">
                <strong>Director:</strong>&nbsp;{movie.Director}
              </li>
              <li className="list-group-item">
                <strong>Writer:</strong>&nbsp;{movie.Writer}
              </li>
              <li className="list-group-item">
                <strong>Actors:</strong>&nbsp;{movie.Actors}
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="card card-body bg-dark my-5 text-light">
            <div className="col-md-12">
              <h3>About </h3>&nbsp;
              {movie.Plot}
              <hr />
              <a
                href={"https://www.imdb.com/title/" + movie.imdbID}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                View on IMDB
              </a>
              <Link to="/" className="btn btn-default text-light">
                Go Back To Search
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
    return <React.Fragment>{loading ? <Spinner /> : movieInfo}</React.Fragment>;
  }
}

const mapStateToProps = (state) => ({
  movie: state.movies.movie,
  loading: state.movies.loading,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovie: (id) => dispatch(fetchMovie(id)),
    setLoading: () => dispatch(setLoading()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
