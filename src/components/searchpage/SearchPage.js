import React from "react";
import Sidenav from "./Sidenav";
import ItemsList from "./ItemsList";
import { connect } from "react-redux";
const SearchPage = ({ items, match }) => {
  return (
    <div>
      <Sidenav params={match.params} />
      {items.length ? <ItemsList params={match.params} /> : <div>Loading</div>}
    </div>
  );
};
const mapStateToProps = (state) => ({
  items: state.itemState.items,
});

export default connect(mapStateToProps)(SearchPage);
