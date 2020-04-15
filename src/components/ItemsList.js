import React, { Component } from "react";
import { connect } from "react-redux";
import ItemDetail from "./ItemDetail";
import ItemCard from "./ItemCard";
class ItemsList extends Component {
  state = {
    item: {},
  };
  render() {
    const itemlist = this.props.items.map((item) => (
      <ItemCard
        item={item}
        key={item.id}
        setItem={() => this.setState({ item: item })}
      />
    ));
    return (
      <>
        <div className="main text-center mt-3">
          <div className="row">{itemlist}</div>
        </div>
        {/* Modal start */}
        <ItemDetail item={this.state.item} />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.itemState.items,
});

export default connect(mapStateToProps)(ItemsList);
