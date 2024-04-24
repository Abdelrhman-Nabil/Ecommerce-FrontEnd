import { useContext } from "react";
import { AuthContext } from "../../../context/auth.context";
import { useNavigate} from "react-router-dom";
import { CartContext } from "../../../context/cart.context";
import './account-dropdown.style.css'
const AccountDropDown = () => {
  const {setIsAccoutCartOpen}=useContext(CartContext);
  const navigate=useNavigate();
  const {logout } = useContext(AuthContext);
  const logOutHandler = () => {
    logout();
    navigate("/");
    setIsAccoutCartOpen(false)
  };

  const orderDataHandler=()=>{
    navigate('/clientOrders')
    setIsAccoutCartOpen(false)

  }

  return (
    <div className="accountDropdownContainer">
      <div className="accountItems">
        <button  className="second-button" onClick={orderDataHandler} >Order & wishlist</button>
        <button className="thired-button" onClick={logOutHandler}>log out</button>
      </div>
    </div>
  );
};
export default AccountDropDown;
