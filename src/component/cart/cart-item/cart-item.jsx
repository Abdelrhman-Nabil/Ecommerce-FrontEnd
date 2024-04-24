import { useContext } from 'react';
import { CartContext } from '../../../context/cart.context';
import './cart-item.css'

const CartItem=({cartItem})=>{
    const {clearItemFromCart } = useContext(CartContext);
    const clearItemToHandler=()=>clearItemFromCart(cartItem);

    const{title,quantity,image,price}=cartItem;
    return(
        <div className='cart-item-container'>
              <img  src={`${process.env.REACT_APP_BACKEND_URL}/${image[0]}`} alt={title}/>
            <div className='item-details'>
                <span className='name'>{title}</span>
                <span className='price'>{quantity} x {price} $</span>
            </div>
            <span className='cart-item-remove-button' onClick={clearItemToHandler}>&#10005;</span>
        </div>
    )
}
export default CartItem;