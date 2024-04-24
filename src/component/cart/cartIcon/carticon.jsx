import { useContext} from 'react';
import { CartContext } from '../../../context/cart.context';
const CartIcon=()=>{
    const {IsCartOpen,setIsCartOpen,cartCount}=useContext(CartContext);
    const ToggleIsCartOpen=()=>setIsCartOpen(!IsCartOpen);
return(
    <div  className='CartIconContainer' onClick={ToggleIsCartOpen}>
        <span>Cart({cartCount})</span>
    </div>
)
}
export default CartIcon;