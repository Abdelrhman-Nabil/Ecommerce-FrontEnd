import { Fragment, useEffect, useState } from "react";
import { useHttpClinet } from "../../../../utils/hooks/http-hook";
import ViewOrders from "../../../component/order/view-orders/reviewOrders";
import { useContext } from "react";
import { CartContext } from "../../../../context/cart.context";

import "./addOrders.css";
const OrderPage = () => {
  const [orders,setOrders]=useState('')
  const{setTotalOrder}=useContext(CartContext)

  const{sendRequest}=useHttpClinet()

  useEffect(()=>{
    const fetchOrder=async ()=>{
      const responseData=await sendRequest(process.env.REACT_APP_BACKEND_URL + '/api/orders/getorders')
       setOrders(responseData.orders)
       setTotalOrder(responseData.orders)
      }
    fetchOrder()
  },[sendRequest,setTotalOrder])

  return(
    <Fragment>

    <div className="order-Page">
    <h1>Orders</h1>
    <div className="Order-view">
   <div className="ordersss-view">
    <div className="orders-header">
    <p>Name</p>
    <p>Email</p>
    <p>Address</p>
    <p className="order-product">Product</p>
    <p className="order-total">Pay</p>
    </div>
   <div className="ViewOrders">
   {orders&&orders.map((order)=>{
      return <ViewOrders list={order} />

    })}
   </div>
    </div>
    </div>
    </div>  
    </Fragment>
)
};
export default OrderPage;
/* <div className="order-Page">
        <h1>Orders</h1>
       <div className="ordersss-view">
        <div className="orders-header">
        <p>Name</p>
        <p>Email</p>
        <p>Address</p>
        <p>Product</p>
        <p>Total</p>
        </div>
        {orders&&orders.map((order)=>{
          return <ViewOrders list={order}/>

        })} */
