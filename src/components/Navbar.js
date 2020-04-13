import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand">Navbar</a>
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
            <div className="col-4">
              <h6>Logout</h6>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  user: state.userState.user,
});

export default connect(mapStateToProps)(Navbar);
