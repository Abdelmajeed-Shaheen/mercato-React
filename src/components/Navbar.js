import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../redux/actions";
import Logo from "../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
const Navbar = (props) => {
  const clear = () => {
    props.logout();
    props.clearOrders();
  };
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
              <Link
                to="/profile"
                style={{ textDecoration: "none", color: "#469045" }}
              >
                <div className="col-3 " onClick={props.getOrders}>
                  <h6>{props.user.username}</h6>
                </div>
              </Link>
              <Link
                to="/home"
                style={{ textDecoration: "none", color: "#469045" }}
              >
                <div className="col-3" onClick={() => clear()}>
                  <h6>Logout</h6>
                </div>
              </Link>
            </>
          )}
          <div className="col">
            <Link to="/cart">
              <FontAwesomeIcon
                icon={faShoppingCart}
                style={{ color: "#fef105" }}
              />
              <span className="badge badge-light " style={{ color: "red" }}>
                {props.cart.length && props.cart.length}
              </span>
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
    getOrders: () => dispatch(actions.getOrders()),
    clearOrders: () => dispatch(actions.clearOrders()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
