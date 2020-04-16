import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
const Category = ({ categories }) => {
  // Since this Link below and the search Link below it are pretty identical,
  // consider moving them into a reusable component
  const categorylist = categories.map((cat) => (
    <Link to={`/search/${cat.name}`} key={cat.name}>
      <div className="col-2" key={cat.id}>
        <div
          className="card h-100"
          style={{
            width: "10rem",
            borderRadius: "50px",
            backgroundColor: "#fef105",
          }}
        >
          <img src={logo} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">{cat.name}</p>
          </div>
        </div>
      </div>
    </Link>
  ));
  return (
    <div className="container mt-2 mb-2 text-center">
      <div className="row">
        {categorylist}
        <Link to="/search">
          <div className="col-2">
            <div
              className="card h-100"
              style={{
                width: "10rem",
                borderRadius: "50px",
                backgroundColor: "#fef105",
              }}
            >
              <img src={logo} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">See All</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  categories: state.categoryState.categories,
});

export default connect(mapStateToProps)(Category);
