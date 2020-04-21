import React from "react";
import AddToCart from "../cart/AddToCart";
const ItemDetail = ({ item }) => {
  return (
    <div
      className="modal fade"
      id="exampleModalCenter"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        role="document"
      >
        <div className="modal-content">
          <div className="row">
            <div className="col-4">
              <img
                src={item.image}
                className="d-block w-100"
                alt={`${item.name}`}
                style={{ maxHeight: "450px" }}
              />
            </div>
            <div className="col-6 mt-3">
              <div className="row">
                <h5>{item.name}</h5>
              </div>
              <div
                className="row mt-2"
                style={{ overflowY: "auto", height: "130px" }}
              >
                <p>{item.descreption}</p>
              </div>
              <div className="row">
                <p>Price: {item.price} JOD </p>
              </div>
              <div className="row">
                <p>Availability: {item.in_stock}</p>
              </div>
              <div className="row mt-2">
                <AddToCart item={item} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
