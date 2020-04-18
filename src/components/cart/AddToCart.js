import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingBasket,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";

class AddToCart extends Component {
  state = {
    itemQuan: 1,
  };

  componentDidUpdate(prevprops) {
    if (prevprops.item !== this.props.item) {
      this.setState({ itemQuan: 1 });
    }
  }
  chenckInput = (event) => {
    if (
      (event.target.value > 0 &&
        event.target.value <= this.props.item.in_stock) ||
      event.target.value === ""
    ) {
      this.setState({ itemQuan: event.target.value });
    }
  };
  render() {
    if (!this.props.item.in_stock) {
      return (
        <div className="alert alert-danger" role="alert">
          Out of Stock
        </div>
      );
    }
    return (
      <>
        <div className="input-group px-3 my-3">
          <div className="input-group-prepend">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() =>
                this.setState({
                  itemQuan: this.state.itemQuan
                    ? parseInt(this.state.itemQuan, 10) - 1
                    : 1,
                })
              }
              disabled={this.state.itemQuan !== 1 ? false : true}
            >
              <FontAwesomeIcon icon={faMinus} style={{ color: "white" }} />
            </button>
          </div>
          <input
            type="text"
            className="form-control text-center px-2"
            id="inlineFormInputGroupUsername2"
            value={this.state.itemQuan}
            onChange={(event) => this.chenckInput(event)}
          />
          <div className="input-group-append">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() =>
                this.setState({
                  itemQuan: this.state.itemQuan
                    ? parseInt(this.state.itemQuan, 10) + 1
                    : 1,
                })
              }
              disabled={
                this.state.itemQuan < this.props.item.in_stock ? false : true
              }
            >
              <FontAwesomeIcon icon={faPlus} style={{ color: "white" }} />
            </button>
          </div>
          <div className="input-group-append">
            <button
              type="button"
              className="btn "
              style={{
                background: "#469045",
              }}
              onClick={() =>
                this.props.addtocart(this.props.item, this.state.itemQuan)
              }
            >
              <FontAwesomeIcon
                icon={faShoppingBasket}
                style={{ color: "white" }}
              />
            </button>
          </div>
        </div>
      </>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addtocart: (item, quantity) =>
      dispatch(actions.addCartItem(item, quantity)),
  };
};
export default connect(null, mapDispatchToProps)(AddToCart);
