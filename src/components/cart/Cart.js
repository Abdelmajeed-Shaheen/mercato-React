import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
class Cart extends Component {
  render() {
    let total = 0;
    const cartitemslist = this.props.cart.map((item) => {
      total = total + item.item.price * item.quantity;
      return (
        <li
          className="list-group-item"
          style={{ borderColor: "#469045", color: "#469045" }}
          key={`${item.item.name}${item.item.id}`}
        >
          <div className="row">
            <div className="col-3">{item.item.name}</div>
            <div className="col-3">x{item.quantity}</div>
            <div className="col-3" style={{ fontSize: "14px" }}>
              total: {(item.item.price * item.quantity).toFixed(2)} JOD
            </div>
            <div className="col-3 text-center">
              <Link style={{ textDecoration: "none" }}>
                <FontAwesomeIcon
                  icon={faTrash}
                  style={{ color: "red" }}
                  onClick={() => this.props.remove(item)}
                />
              </Link>
            </div>
          </div>
        </li>
      );
    });
    return (
      <div className="bglogin">
        <div className="container ">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6 ">
              <div></div>
              <h1 className="text-center" style={{ color: "#469045" }}>
                {this.props.user ? `${this.props.user.username}'s` : "Your"}{" "}
                Cart
              </h1>
              <Link
                style={{
                  color: "#469045",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
                onClick={() => this.props.clear()}
              >
                Clear Cart{" "}
                <FontAwesomeIcon icon={faTrash} style={{ color: "red" }} />
              </Link>
              {this.props.user && (
                <Link
                  style={{
                    color: "#469045",
                    textDecoration: "none",
                    float: "right",
                    fontWeight: "bold",
                  }}
                  onClick={() => this.props.getOrders()}
                  to="/profile"
                >
                  Order History
                </Link>
              )}

              <div
                className="mt-4"
                style={{
                  height: "400px",
                  overflowY: "scroll",
                  scrollbarWidth: "none",
                }}
              >
                <ul className="list-group">
                  {cartitemslist.length ? (
                    cartitemslist
                  ) : (
                    <li className="list-group-item text-center">
                      No Itmes Yet
                    </li>
                  )}
                </ul>
              </div>
              <div className="text-center">
                <h3 style={{ color: "red", fontWeight: "bold" }}>
                  Total : {total.toFixed(2)} JOD
                </h3>
                {this.props.user ? (
                  <>
                    {cartitemslist.length ? (
                      <button
                        className="btn btn-warning btn-block my-4"
                        onClick={this.props.checkout}
                      >
                        checkout
                      </button>
                    ) : (
                      <div className="alert alert-danger" role="alert">
                        You need to Add items in order to check out
                      </div>
                    )}
                  </>
                ) : (
                  <div className="alert alert-danger" role="alert">
                    You need to Login in order to check out
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  user: state.userState.user,
  cart: state.cartState.cartitems,
});
const mapDispatchToProps = (dispatch) => {
  return {
    remove: (item) => dispatch(actions.removeCartItem(item)),
    clear: () => dispatch(actions.emptyCart()),
    checkout: () => dispatch(actions.checkout()),
    getOrders: () => dispatch(actions.getOrders()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
