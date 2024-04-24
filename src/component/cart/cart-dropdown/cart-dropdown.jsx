import { useContext } from 'react';
import { CartContext } from '../../../context/cart.context';
import { useNavigate } from 'react-router-dom';
import CartItem from '../cart-item/cart-item';
import Button from '../../others/button/button';
import './cart-dropdown.style.css'
const CartDropDown=()=>{
    const {cartItems,setIsCartOpen,IsCartOpen}=useContext(CartContext)
    const navigation=useNavigate();

    const goToCheckOutHandler=()=>{
        navigation('/checkout')
        setIsCartOpen(!IsCartOpen)
      }
return(
    <div className='CartDropdownContainer'>
     <div className='CartItems'>
     {
 cartItems.length ?
(cartItems.map(item => <CartItem key={item.id} cartItem={item} />))
:
(<span className='EmptyMessage'>Your cart is empty</span>)}
     </div >
     <Button onClick={goToCheckOutHandler}  disabled={cartItems.length===0}>GO TO CHECKOUT</Button>
    </div >
)
}
export default CartDropDown;