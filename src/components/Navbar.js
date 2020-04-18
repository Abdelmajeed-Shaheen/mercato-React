import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../redux/actions";
import Logo from "../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
const Navbar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light sticky-top">
      <Link className="navbar-brand" to="/home">
        <img src={Logo} style={{ height: "50px", width: "50px" }} alt="logo" />
      </Link>
      <div className="my-2 my-sm-0">
        <div className="row">
          {!props.user ? (
            <>
              <div className="col-4">
                <Link
                  to="/login"
                  style={{ textDecoration: "none", color: "#469045" }}
                >
                  <h6>Login</h6>
                </Link>
              </div>
              <div className="col-4">
                <Link
                  to="/register"
                  style={{ textDecoration: "none", color: "#469045" }}
                >
                  <h6>Register</h6>
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className="col-3 mr-5">
                <h6>{props.user.username}</h6>
              </div>
              <Link
                to="/home"
                style={{ textDecoration: "none", color: "#469045" }}
              >
                <div className="col-3" onClick={props.logout}>
                  <h6>Logout</h6>
                </div>
              </Link>
            </>
          )}
          <div className="col-3">
            <Link to="/cart">
              <FontAwesomeIcon
                icon={faShoppingCart}
                style={{ color: "#fef105" }}
              />
              {props.cart.length && props.cart.length}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  user: state.userState.user,
  cart: state.cartState.cartitems,
});

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(actions.logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
