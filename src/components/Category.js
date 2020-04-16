import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
const Category = ({ categories }) => {
  const categorylist = categories.map((cat) => (
    <div className=" col-2 " key={cat.id}>
      <Link
        to={`/search/${cat.name}`}
        key={cat.name}
        style={{ textDecoration: "none", color: "#469045" }}
      >
        <div className="card">
          <div className="card-body">
            <p className="card-text">{cat.name}</p>
          </div>
          <img src={logo} className="card-img-top" />
        </div>
      </Link>
    </div>
  ));
  return (
    <div className="container mt-2 mb-2 text-center">
      <div className="row">
        {categorylist}

        <div className=" col-2 ">
          <Link
            to="/search"
            style={{ textDecoration: "none", color: "#469045" }}
          >
            <div className="card">
              <div className="card-body">
                <p className="card-text">See All</p>
              </div>
              <img src={logo} className="card-img-top" alt="..." />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  categories: state.categoryState.categories,
});

export default connect(mapStateToProps)(Category);
