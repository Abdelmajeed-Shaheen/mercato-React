import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";
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
        <div className="card h-100">
          <div className="card-body">
            <p className="card-text">{cat.name}</p>
          </div>
          <img
            src={cat.image}
            className="card-img-top rounded-circle px-3 py-3"
            alt={cat.image}
            style={{ height: "150px" }}
          />
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
