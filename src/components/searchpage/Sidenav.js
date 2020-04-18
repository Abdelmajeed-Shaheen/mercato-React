import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../../redux/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleDown, faMinus } from "@fortawesome/free-solid-svg-icons";
const Sidenav = ({ categories, params, filter }) => {
  const categorylist = categories.map((cat) => (
    <div key={cat.name}>
      <li
        data-toggle="collapse"
        data-target={`#${cat.name
          .replace(/[^a-z ^A-Z]/g, "")
          .replace(/\s/g, "")}`}
        className={
          params.category === cat.name ? "collapsed activecat" : "collapsed"
        }
        style={{ fontSize: "14px" }}
      >
        {cat.name}
        {cat.subcategories.length && (
          <FontAwesomeIcon
            icon={faArrowCircleDown}
            style={{ marginLeft: "2px" }}
          />
        )}
      </li>
      <ul
        className="sub-menu collapse"
        id={cat.name.replace(/[^a-z ^A-Z]/g, "").replace(/\s/g, "")}
      >
        {cat.subcategories.map((sub) => {
          return (
            <Link
              to={`/search/${cat.name}/${sub}`}
              style={{ textDecoration: "none", color: "#fef105" }}
              key={`${cat.name}${sub}`}
              onClick={() => filter({ category: cat.name, subcat: sub })}
            >
              <li
                key={sub}
                className={params.subcat === sub ? "active" : "none"}
              >
                <FontAwesomeIcon
                  icon={faMinus}
                  style={{ marginLeft: "2px", marginRight: "2px" }}
                />
                {sub}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  ));
  return (
    <div className="nav-side-menu">
      <div className="brand">Categories</div>
      <i
        className="fa fa-bars fa-2x toggle-btn"
        data-toggle="collapse"
        data-target="#menu-content"
      ></i>
      <div className="menu-list">
        <ul id="menu-content" className="menu-content collapse out">
          {categorylist}
        </ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(Sidenav);
