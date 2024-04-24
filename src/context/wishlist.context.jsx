import { createContext, useState,useContext } from "react";
import { AuthContext } from "./auth.context";
const addWishlistItem = (wishlistItems, productToAdd) => {
    const existingCartItem = wishlistItems.find((wishlistItem) => wishlistItem.id === productToAdd.id);
    if (existingCartItem) {
        return wishlistItems.filter(wishtlistItem=>wishtlistItem.id!==productToAdd.id)        
    }
    return [...wishlistItems, { ...productToAdd, quantity: 1 }]
}
const clearWishlistItem=(wishlistItems,productToClear)=>{
    return wishlistItems.filter(wishtlistItem=>wishtlistItem.id!==productToClear.id);
}
export const WishlistContext = createContext({
    wishlistItems: [],
    addItemsToWishlist: () => { },
    clearItemFromWishlist:()=>{},
})

export const WishlistProvider = ({ children }) => {
    const [wishlistItems, setWishlistItems] = useState([]);
    const [IsColered,setIsColered]=useState(false)
    const{isLoggedIn}=useContext(AuthContext)


    const addItemsToWishlist = (productToAdd) => {
        setWishlistItems(addWishlistItem(wishlistItems, productToAdd))
        if(isLoggedIn){
            localStorage.setItem("userWishlist",JSON.stringify({Wishlist:wishlistItems}))

        }
    }
    const clearItemFromWishlist=(productToClear)=>{
        setWishlistItems(clearWishlistItem(wishlistItems,productToClear))
    }
  const value = {wishlistItems,setWishlistItems, addItemsToWishlist,clearItemFromWishlist,IsColered,setIsColered}
    return (
        <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>
    )
}