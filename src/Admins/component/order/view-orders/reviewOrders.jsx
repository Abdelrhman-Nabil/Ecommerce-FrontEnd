import { Fragment, useState } from "react";
import "./reviewOrders.css";
import BackDrop from "../../../../component/others/backDrop/backDrop";
import DeleteOrder from "../delete-order/delete-order";
const ViewOrders = ({list}) => {
  const [showModal, setShowModal] = useState(false);
  const{recipient,email,address,total,product,id}=list

const products=product.map(i=>i.map(s=>s.title))
  const productw=products.join(" -   ")
  return (
    <Fragment>
      {showModal && (<BackDrop onClick={() => {setShowModal(false);}}/>)}
      {showModal && (<DeleteOrder id={id} onClick={() => {setShowModal(false);}}/>)}

        <div className="view-order-list">
          <p className="list-recipient">{recipient}</p>
           <div className="list-email">
           <p>{email}</p>

           </div>
          <p className="list-address">{address}</p>
          <p className="list-product">{productw}</p>
          <p className="list-total">{{total} ? "Yes" : "No"}</p>
         <div className="delete-order">
         <button
            className="deleteButton" onClick={() => {setShowModal(true);}}>🗑️</button>
                   </div>
        </div>
    </Fragment>
  );
};
export default ViewOrders;
