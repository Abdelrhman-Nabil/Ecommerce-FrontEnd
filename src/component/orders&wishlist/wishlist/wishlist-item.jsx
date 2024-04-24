import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { WishlistContext } from '../../../context/wishlist.context';
import './wishlist-item.css'
const WishlistItem=({data})=>{
    const{clearItemFromWishlist}=useContext(WishlistContext)
   const navigate=useNavigate()
    const{title,image,price,id}=data;
    const submitHandler=()=>{ 
        navigate(`/productPreview/${id}`)
      }
      const clearItemToHandler=()=>clearItemFromWishlist(data);
      return(
        <div className='wishlist-item-container'>
        <img src={`${process.env.REACT_APP_BACKEND_URL}/${image[0]}`} alt={title}onClick={submitHandler}/>
            <div className='wishlist-item-details'>
                <span className='Wishlist-name'>{title}</span>
                <span className='wishlist-price'>It's Price :{price}</span>
            </div>
            <span className='remove-button' onClick={clearItemToHandler}>&#10005;</span>

        </div>
    )
}
export default WishlistItem