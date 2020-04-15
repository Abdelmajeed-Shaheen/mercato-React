import React from "react";
import logo from "../assets/images/logo.png";
import AddToCart from "./AddToCart";
const ItemCard = ({ item, setItem }) => {
  return (
    <div className="col-sm-3 mb-2">
      <div className="card h-100">
        <img src={logo} className="card-img-top" alt={item.name} />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">price: {item.price}</p>
          <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModalCenter"
            onClick={setItem}
          >
            View Item
          </button>
        </div>
        <div className="card-footer">
          <small className="text-muted">
            <AddToCart item={item} />
          </small>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
