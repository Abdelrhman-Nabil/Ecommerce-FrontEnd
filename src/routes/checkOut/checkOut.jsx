import { Fragment, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import { CartContext } from "../../context/cart.context";
import CheckoutItem from "../../component/checkOutItem/checkOutItem";
import Button from "../../component/others/button/button";
import BackDrop from "../../component/others/backDrop/backDrop";
import AlartModal from "../../component/others/modal/alert/alert";
import "./checkOut.css";
import PayButton from "../../component/paymentButton/paymentButton";

const CheckOut = () => {
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();
  const { cartItems, cartTotal } = useContext(CartContext);
  const { isLoggedIn } = useContext(AuthContext);
  const paymentHandler = () => {
    if (isLoggedIn) {
      navigate("/paymentForm");
    }
    else{
      setShowModal(true)    
    }
  };
  return (
   <Fragment>
     {showModal && (<BackDrop onClick={() => {setShowModal(false);}}/>)}
    {showModal &&(<AlartModal data={'Should Log in Frist '} onClick={() => {setShowModal(false);}} nav={"/auth"}/>)}
  
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Title</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((cartItem) => {
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
      })}
      <span className="total">Total :${cartTotal}</span>
      <Button onClick={paymentHandler} disabled={cartItems.length===0}>Payment For order</Button>
    </div>

    </Fragment>

  );
};
export default CheckOut;
