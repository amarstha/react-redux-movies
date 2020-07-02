import React, { Component } from "react";
import { connect } from "react-redux";
import { searchMovie } from "../../actions/searchAction";
import { fetchMovies } from "../../actions/fetchMovies";
import { setLoading } from "../../actions/loading";

class SeachForm extends Component {
  handleChange = (e) => {
    console.log(this.props.searchMovie(e.target.value));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.fetchMovies(this.props.text);
    this.props.setLoading();
  };

  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid mt-5 text-center">
          <div className="container">
            <h1 className="display-4 mb-3">
              <i className="fa fa-search" /> Search for a movie ,TV series ..
            </h1>
            <form id="searchForm" onSubmit={this.handleSubmit}>
              <input
                type="text"
                className="form-control"
                name="searchText"
                placeholder="Search Movies, TV Series ..."
                onChange={this.handleChange}
              />
              <button type="submit" className="btn btn-primary btn-bg mt-3">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  text: state.movies.text,
});

const mapDispatchToProps = (dispatch) => {
  return {
    searchMovie: (text) => dispatch(searchMovie(text)),
    fetchMovies: (text) => dispatch(fetchMovies(text)),
    setLoading: () => dispatch(setLoading()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SeachForm);
