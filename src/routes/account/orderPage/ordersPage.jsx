import { useContext } from 'react'
import {WishlistContext} from '../../../context/wishlist.context'
import WishlistItem from '../../../component/orders&wishlist/wishlist/wishlist-item'
import './ordersPage.css'
import OrderList from '../../../component/orders&wishlist/orders/oder-list/order-list'
const ClientOrderPage=()=>{
    const {wishlistItems}=useContext(WishlistContext)
    return(
        <div className='Client-order-page'>
            <div className='the-1-list'>
                <div className='orders-head'>Orders</div>
               <div className='wishlit-element'> <OrderList/></div>
            </div>
            <div className='the-2-list'>
            <div className='wishlit-head'>Wishlist</div>
            {wishlistItems.length===0?
            <div className={`wishlit-element-empty`}>
            <h1>Empty</h1>
            </div>
            :
            <div className={`wishlit-element`}>
            {wishlistItems &&wishlistItems.map((item) => (
               <WishlistItem key={item.id} data={item} /> 
             ))}
            </div>}
           
            </div>
        </div>
    )
}
export default ClientOrderPage