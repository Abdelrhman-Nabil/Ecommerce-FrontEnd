import './checkOutItem.css'
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
const CheckoutItem=({cartItem})=>{
const{title,image,price,quantity}=cartItem
const {addItemsToCart, removeItemFromCart,clearItemFromCart } = useContext(CartContext);
const addItemToHandler=()=>addItemsToCart(cartItem);
const removeItemToHandler=()=>removeItemFromCart(cartItem);
const clearItemToHandler=()=>clearItemFromCart(cartItem);
return(
    <div className='checkout-item-container'>
     <div className='container-image'>
     <img  src={`${process.env.REACT_APP_BACKEND_URL}/${image[0]}`} alt={title}/>
     </div>
     <span className='name'>{title}</span>
        <span className='quantity'>
            <div className='arrow' onClick={removeItemToHandler}>&#10094;</div>
            <span className='value'>{quantity}</span>
            <div className='arrow' onClick={addItemToHandler}>&#10095;</div>
        </span>
     <span className='price'>{price}</span>
     <span className='remove-button' onClick={clearItemToHandler}>&#10005;</span>
    </div>
)

}
export default CheckoutItem