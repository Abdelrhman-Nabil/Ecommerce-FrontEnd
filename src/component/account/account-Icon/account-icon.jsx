import { useContext} from 'react';
import { CartContext } from '../../../context/cart.context';
const AccountIcon=()=>{
    const {IsAccoutCartOpen,setIsAccoutCartOpen}=useContext(CartContext);
    const ToggleIsCartOpen=()=>setIsAccoutCartOpen(!IsAccoutCartOpen);
return(
    <div  className='accountIconContainer' onClick={ToggleIsCartOpen}>
        <span>Account</span>
    </div>
)
}
export default AccountIcon;