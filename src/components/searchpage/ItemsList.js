import React, { Component } from "react";
import { connect } from "react-redux";
import ItemDetail from "./ItemDetail";
import ItemCard from "./ItemCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

class ItemsList extends Component {
  state = {
    item: {},
    items: this.props.filtereditems,
    query: "",
  };
  componentDidUpdate(prevprops) {
    if (prevprops.filtereditems !== this.props.filtereditems) {
      this.setState({ items: this.props.filtereditems });
    }
  }
  handleChange = (event) => {
    const filteredItemsList = this.props.filtereditems.filter((item) =>
      `${item.name} ${item.descreption}`
        .toLowerCase()
        .includes(event.target.value.toLowerCase())
    );
    this.setState({ items: filteredItemsList, query: event.target.value });
  };
  render() {
    const itemlist = this.state.items.map((item) => (
      <ItemCard
        item={item}
        key={item.id}
        setItem={() => this.setState({ item: item })}
      />
    ));
    return (
      <>
        <div className="main text-center mt-3">
          <div className="row  mr-0 ml-0 mb-2">
            <div className="col-3"></div>
            <div className="form-group col-6">
              <div className="input-group">
                <input
                  className="form-control"
                  type="text"
                  value={this.state.query}
                  placeholder="Search..."
                  onChange={this.handleChange}
                />
                <div className="input-group-append">
                  <span className="input-group-text">
                    <FontAwesomeIcon icon={faSearch} />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="row mr-0 ml-0">{itemlist}</div>
        </div>
        {/* Modal start */}
        <ItemDetail item={this.state.item} />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  filtereditems: state.itemState.filtereditems,
});

export default connect(mapStateToProps)(ItemsList);
