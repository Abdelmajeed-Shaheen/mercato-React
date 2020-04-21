import React, { Component } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import OrderModal from "./OrderModal";
class Profile extends Component {
  state = {
    order: this.props.orders[0],
  };
  render() {
    const Orderslist = this.props.orders.map((order, index) => {
      return (
        <li
          className="list-group-item"
          style={{ borderColor: "#469045", color: "#469045" }}
          key={`order${order.id}`}
        >
          <div className="row">
            <div className="col-9">
              {this.props.profile.first_name} order {index + 1}
            </div>
            <div className="col-3 text-center">
              <Link
                style={{ textDecoration: "none" }}
                data-toggle="modal"
                data-target="#exampleModalCenter"
              >
                <FontAwesomeIcon
                  icon={faEye}
                  style={{ color: "#469045" }}
                  onClick={() => this.setState({ order: order })}
                />
              </Link>
            </div>
          </div>
        </li>
      );
    });
    return (
      <>
        <div className="container mt-3">
          <div className="row mb-2">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <div className="alert alert-primary" role="alert">
                <div className="row">
                  <div className="col-6">
                    Name:{" "}
                    {`${this.props.profile.first_name} ${this.props.profile.last_name}`}
                  </div>
                  <div className="col-6">
                    Email:{" "}
                    {this.props.profile.email
                      ? this.props.profile.email
                      : "No email provided"}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6 ">
              <div></div>
              <h4 className="text-center" style={{ color: "#469045" }}>
                Orders History
              </h4>
              <div
                className="mt-4"
                style={{
                  height: "400px",
                  overflowY: "scroll",
                  scrollbarWidth: "none",
                }}
              >
                <ul className="list-group">
                  {Orderslist.length ? (
                    Orderslist
                  ) : (
                    <li className="list-group-item text-center">
                      No Orders Yet
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {this.state.order && <OrderModal order={this.state.order} />}
      </>
    );
  }
}
const mapStateToProps = state => ({
  profile: state.userState.profile,
  orders: state.orderState.orders,
});

export default connect(mapStateToProps)(Profile);
