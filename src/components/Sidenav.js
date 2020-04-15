import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
const Sidenav = ({ categories }) => {
  const categorylist = categories.map((cat) => (
    <div key={cat.name}>
      <li
        data-toggle="collapse"
        data-target={`#${cat.name
          .replace(/[^a-z ^A-Z]/g, "")
          .replace(/\s/g, "")}`}
        className="collapsed active"
      >
        <i className="fa fa-gift fa-lg"></i>
        {cat.name}
        {cat.subcategories.length ? <span className="arrow"></span> : ""}
      </li>
      <ul
        className="sub-menu collapse"
        id={cat.name.replace(/[^a-z ^A-Z]/g, "").replace(/\s/g, "")}
      >
        {cat.subcategories.map((sub) => {
          return (
            <Link
              to={`/search/${cat.name}/${sub}`}
              style={{ textDecoration: "none", color: "white" }}
              key={`${cat.name}${sub}`}
            >
              <li key={sub}>{sub}</li>
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

export default connect(mapStateToProps)(Sidenav);
