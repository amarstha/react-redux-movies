import React from "react";
import { connect } from "react-redux";

const Error = (props) => {
  return (
    <div className="row">
      <h1 style={{ textAlign: "center", display: "table", width: "100%" }}>
        Nothing to show for search "{props.text}"
      </h1>
    </div>
  );
};

const mapStateToProps = (state) => ({
  text: state.movies.text,
});

export default connect(mapStateToProps)(Error);
