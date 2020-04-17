import React, { Component } from "react";

class AddToCart extends Component {
  state = {
    itemQuan: 1,
  };

  componentDidUpdate(prevprops) {
    if (prevprops.item !== this.props.item) {
      this.setState({ itemQuan: 1 });
    }
  }
  // checkInput**
  chenckInput = (event) => {
    /**
     * You can rearrange the conditions to this single condition:
     * (event.target.value > 0 && event.target.value <= this.props.item.in_stock) || (event.target.value === "")
     */
    if (event.target.value > 0 || event.target.value === "") {
      if (
        event.target.value <= this.props.item.in_stock ||
        event.target.value === ""
      ) {
        this.setState({ itemQuan: event.target.value });
      }
    }
  };
  render() {
    // reverse the condition below
    // if not in stock return the message
    return (
      <>
        {this.props.item.in_stock ? (
          <div className="input-group px-3 my-3">
            <div className="input-group-prepend">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() =>
                  this.setState({
                    itemQuan: this.state.itemQuan ? this.state.itemQuan - 1 : 1,
                  })
                }
                disabled={this.state.itemQuan !== 1 ? false : true}
              >
                <i className="fa fa-minus" aria-hidden="true"></i>
              </button>
            </div>
            <input
              type="text"
              className="form-control text-center px-2"
              id="inlineFormInputGroupUsername2"
              value={this.state.itemQuan}
              onChange={(event) => this.chenckInput(event)} {/** no need for arrow function */}
            />
            <div className="input-group-append">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() =>
                  this.setState({
                    itemQuan: this.state.itemQuan ? this.state.itemQuan + 1 : 1,
                  })
                }
                disabled={
                  this.state.itemQuan < this.props.item.in_stock ? false : true
                }
              >
                <i className="fa fa-plus" aria-hidden="true"></i>
              </button>
            </div>
            <div className="input-group-append">
              <button
                type="button"
                className="btn "
                style={{
                  background: "#469045",
                }}
              >
                <i
                  className="fas fa-shopping-basket"
                  style={{ color: "white" }}
                ></i>
              </button>
            </div>
          </div>
        ) : (
          <div className="alert alert-danger" role="alert">
            Out of Stock
          </div>
        )}
      </>
    );
  }
}

export default AddToCart;
