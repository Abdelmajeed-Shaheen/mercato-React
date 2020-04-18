import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../../redux/actions";
import logo from "../../assets/images/logo.png";
import CategoryCard from "./CategoryCard";
const Category = ({ categories, filter }) => {
  const categorylist = categories.map((cat) => (
    <CategoryCard cat={cat} key={`${cat.name}${cat.id}`} />
  ));
  return (
    <div className="container mt-2 mb-2 text-center">
      <div className="row">
        {categorylist}
        <div
          className=" col-2 "
          onClick={() => filter({ category: "", subcat: "" })}
        >
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
const mapDispatchToProps = (dispatch) => {
  return {
    filter: (params) => dispatch(actions.filterItems(params)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Category);
