import {useContext} from "react";
import { CartContext } from "../../../context/cart.context";
import {WishlistContext} from "../../../context/wishlist.context"
import { useNavigate } from "react-router-dom";
import Wishlist from '../../icons/wishlist-icon/wishlist-icon'
import './homeItem.css'
const HomeItem=({product})=>{
  let navigate = useNavigate();
  const {addItemsToCart}=useContext(CartContext);
  const {addItemsToWishlist,wishlistItems}=useContext(WishlistContext);
  const addProductToCart=()=>{addItemsToCart(product);}
  const {image,title,price,id}=product;
  const submitHandler=()=>{ 
    navigate(`/productPreview/${id}`)
  }
  const wishlistaddHandler=()=>{
    addItemsToWishlist(product)

  }
const findItemInWishList=()=>{
 if(wishlistItems){
  const existing=wishlistItems.find((wishlistItem)=>wishlistItem.id === product.id);
  if(existing){return true}else{return false}
 }

}


  return(
    <div className='product-card-container' >
    <button className="wislistIcon" onClick={wishlistaddHandler}>
        <Wishlist isExist={findItemInWishList()} />
      </button>
        <div className='IMage-container' >
        <img  src={`${process.env.REACT_APP_BACKEND_URL}/${image[0]}`} alt={title}  onClick={submitHandler}/>
        <button onClick={submitHandler} style={{display:"none"}}/>
        </div>
        <div className='footer'>
        <span className='name'>{title}</span>
        <span className='price'>{price} $ </span>
        </div>
        <div className='buttons-container'>
        <button className='itemButton' onClick={addProductToCart} >Add To Card</button>

        </div>

    </div>
  )

}

export default HomeItem

  // const existing=wishlistItems.find((wishlistItem)=>wishlistItem.id === product.id);
  // if(existing){
  //    wishlists.push(product)
  //   return(
  //   localStorage.setItem("userWishlist",JSON.stringify({Wishlist:wishlists})),true)
  // }else{
  //   wishlists.pop(product)
  //   return(
  