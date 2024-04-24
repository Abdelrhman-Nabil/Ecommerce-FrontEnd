import { Fragment, useEffect, useState } from 'react'
import { useContext } from 'react';
import {AuthContext} from '../../../../context/auth.context'
import { useHttpClinet } from '../../../../utils/hooks/http-hook'
import LoadingSpinner from '../../../others/loading-sppiner/loadingSppiner';
import OrderItem from '../order-item/order-item';
import './order-list.css'
const OrderList=()=>{
    const [clientOrders,setClientOrders]=useState('')
 const {sendRequest,isLoading}=useHttpClinet()
     const {userId}=useContext(AuthContext)
     
 useEffect(()=>{
    const fetchOrder=async()=>{
      try{
        const responseDataOrder=await sendRequest(  process.env.REACT_APP_BACKEND_URL + `/api/orders/user/${userId}`)
        if(responseDataOrder){
            setClientOrders(responseDataOrder.orders)
         }
       }
       catch(err){}
    }
    fetchOrder();
  },[sendRequest,userId])

    return(
         <Fragment>
        {isLoading && <LoadingSpinner overlay />}
        
        {clientOrders && clientOrders.map((clientOrder)=>{
            return(
                <OrderItem key={clientOrder.id} data={clientOrder} />

            )
        })}
         </Fragment>
        )
}
export default OrderList