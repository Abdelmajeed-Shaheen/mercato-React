import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../redux/actions";
import Logo from "../assets/images/logo.png";

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light ">
      <Link className="navbar-brand" to="/welcome">
        <img src={Logo} style={{ height: "50px", width: "50px" }} />
      </Link>
      <div className="my-2 my-sm-0">
        <div className="row">
          {!props.user ? (
            <>
              <div className="col-4">
                <Link to="/login">
                  <h6>Login</h6>
                </Link>
              </div>
              <div className="col-4">
                <Link to="/register">
                  <h6>Register</h6>
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className="col-4">
                <h6>{props.user.username}</h6>
              </div>
              <div className="col-4" onClick={props.logout}>
                <h6>Logout</h6>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  user: state.userState.user,
});

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(actions.logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
