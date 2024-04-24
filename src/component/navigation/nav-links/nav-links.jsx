import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import CartIcon from '../../cart/cartIcon/carticon';
import { useContext } from 'react';
import { CartContext } from '../../../context/cart.context';
import { AuthContext } from '../../../context/auth.context';
import CartDropDown from '../../cart/cart-dropdown/cart-dropdown'
import AccountIcon from '../../account/account-Icon/account-icon';
import AccountDropDown from '../../account/account-dropdown/account-dropdown';
import './nav-links.css';
const NavLinks = () => {
  const {isLoggedIn,logout}=useContext(AuthContext)
  const {IsCartOpen,IsAccoutCartOpen,cartItems}=useContext(CartContext);
  return(
    <Fragment>
    <div className="nav-links">
  <NavLink to={'/'}>Home</NavLink>
  <NavLink to={'/allProduct'}>All Products</NavLink>
  { !isLoggedIn &&<NavLink to="/auth">Log In</NavLink>}
  {isLoggedIn &&  
  <div className='widows-view'><NavLink><AccountIcon/></NavLink></div>}
  {isLoggedIn &&  
    <div className='screen-view'>
    <NavLink to={'/clientOrders'}>Order & wishlist</NavLink>
    <NavLink to={"/"} onClick={()=>{logout()}}> Log Out</NavLink>
    </div>}
    {cartItems.length === 0 ? <div><NavLink className='screen-view'><CartIcon/></NavLink></div>
     :<div className='CartDropDown-screen-view'><CartDropDown/></div>} {<div  className='widows-view'><NavLink ><CartIcon/></NavLink></div>}
  </div> 
  <div className='cartDrop-open'>
  {IsCartOpen && <CartDropDown/>}
  </div>
  <div className='accountDrop-open '>
  {IsAccoutCartOpen && <AccountDropDown/>}
  </div>
  </Fragment>
  )
};

export default NavLinks;
