import React from "react";
import logo from "../../assets/images/logo.png";
import AddToCart from "../cart/AddToCart";
const ItemCard = ({ item, setItem }) => {
  return (
    <div className="col-md-4 mb-2">
      <div className="card h-100">
        <img
          src={item.image}
          className="card-img-top"
          alt={item.name}
          style={{ height: "280px" }}
        />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">price: {item.price}</p>
          <button
            type="button"
            className="btn "
            data-toggle="modal"
            data-target="#exampleModalCenter"
            onClick={setItem}
            style={{
              backgroundColor: "#469045",
              color: "white",
              borderBlockColor: "#469045",
            }}
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
