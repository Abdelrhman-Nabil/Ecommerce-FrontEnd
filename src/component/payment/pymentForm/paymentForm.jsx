import { Fragment, useContext,useState} from "react";
import { CartContext } from "../../../context/cart.context";
import {VALIDATOR_REQUIRE,VALIDATOR_EMAIL} from "../../../utils/validation/validators";
import { useForm } from "../../../utils/hooks/form-hook";
import { useHttpClinet } from "../../../utils/hooks/http-hook";
import { AuthContext } from "../../../context/auth.context";
import SuccessModal from "../../others/modal/success/success.modal";
import BackDrop from '../../others/backDrop/backDrop'
import PaymentElement from "../paymentElement/payment-element";
import Input from "../../others/input/input";
import Button from "../../others/button/button";
import ErrorModal from "../../others/modal/error/error";
import LoadingSpinner from "../../others/loading-sppiner/loadingSppiner";
import "./paymentForm.css";
import PayButton from "../../paymentButton/paymentButton";

const PaymentForm = () => {
  const{sendRequest,error,clearError,isLoading}=useHttpClinet()
  const[showModal,setShowModal]=useState(false)
  const { cartItems, cartTotal } = useContext(CartContext);

  const{userId,token}=useContext(AuthContext)
  const [formState, inputHandler] = useForm(
    {
      recipient: {
        value: "",
        isValid: false,
      },
      email: {
        value: "",
        isValid: false,
      },
      address: {
        value: "",
        isValid: false,
      },
    },
    false
  );


  const payHandler=()=>{
    // setShowModal(true);

    
  }
  const paySubmitHandler = async(event) => {
    event.preventDefault();
  
     try{
      await sendRequest(  process.env.REACT_APP_BACKEND_URL + "/api/orders","POST",JSON.stringify({
        recipient:formState.inputs.recipient.value,
        email:formState.inputs.email.value,
        address:formState.inputs.address.value,
        total:cartTotal,
        date:new Date(),
        product:cartItems,
        creator:userId,
      }),{
        'Content-Type':"application/json",
        authorization:'Bearer '+ token

      })
     }catch(err){}
  }
  return (
    <Fragment>
    {showModal && <BackDrop onClick={()=>{setShowModal(false)}}  />} 
    {showModal && <SuccessModal  onClick={()=>{setShowModal(false)}} />}

    <div className="payment-form-container">
    {error && <BackDrop />}
    {error && <ErrorModal data={error} onClick={clearError} />}   

      <div className="frist-elements">
        {isLoading && <LoadingSpinner overlay/>}
        {cartItems.length ? (
          cartItems.map((cartItem) => {
            return <PaymentElement key={cartItem.id} cartItem={cartItem} />;
          })
        ) : (
          <span className="EmptyMessage">Your cart is empty</span>
        )}
        <h1 className={`${cartItems.length?'total':'total-unshow'}`}>
          The Total: {cartTotal ? cartTotal + "$" : ""}
        </h1>
      </div>
      <div className="thier-element">
          <form onSubmit={paySubmitHandler}>
            <Input
              element="input"
              id="recipient"
              type="text"
              label="Recipient"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please enter name of Recipient "
              onIput={inputHandler}
            />
            <Input
              element="input"
              id="email"
              type="email"
              label="email"
              validators={[VALIDATOR_EMAIL()]}
              errorText="Please enter a email"
              onIput={inputHandler}
            />
            <Input
              element="input"
              id="address"
              type="text"
              label="Address"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please enter a Address"
              onIput={inputHandler}
            />
            <div className="totals">
              <label>Total</label>
              <input value={cartTotal +'$'} disabled/>
            </div>
            <div className="pay-button">
          {!formState.isValid ?
          <Button inverse onClick={payHandler} disabled={!formState.isValid}>PAY</Button>

          :<PayButton   cartItems={cartItems} />}
          
            </div>
          </form>
        </div>
    </div>
    </Fragment>

  );
};
export default PaymentForm;
