import React from "react";
const OrderModal = ({ order }) => {
  const productsList = order.products.map((item) => {
    return <li className="list-group-item">{item}</li>;
  });
  return (
    <div
      className="modal fade"
      id="exampleModalCenter"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header ">
            <h5
              className="modal-title text-center"
              id="exampleModalCenterTitle"
            >
              OrderID: {order.id}
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <h5 className="text-center">You Bought</h5>
            <ul className="list-group">{productsList}</ul>
          </div>
          <div className="modal-footer text-center">
            <button type="button" className="btn btn-warning">
              Any Issues!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
