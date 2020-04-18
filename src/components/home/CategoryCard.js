import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";
import logo from "../../assets/images/logo.png";
const CategoryCard = ({ cat, filter }) => {
  return (
    <div
      className=" col-2 "
      key={cat.id}
      onClick={() => filter({ category: cat.name, subcat: "" })}
    >
      <Link
        to={`/search/${cat.name}`}
        key={cat.name}
        style={{ textDecoration: "none", color: "#469045" }}
      >
        <div className="card">
          <div className="card-body">
            <p className="card-text">{cat.name}</p>
          </div>
          <img src={logo} className="card-img-top" alt={`${logo}`} />
        </div>
      </Link>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    filter: (params) => dispatch(actions.filterItems(params)),
  };
};
export default connect(null, mapDispatchToProps)(CategoryCard);
