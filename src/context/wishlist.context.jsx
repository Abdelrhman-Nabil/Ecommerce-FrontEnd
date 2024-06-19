import { createContext, useContext, useState } from "react";
import { AuthContext } from "./auth.context";

export const WishlistContext=createContext({
    wishlistItems:[],
    addItemsToWishlist: () => { },
    clearItemFromWishlist:()=>{},
})

const addWishlistItem=(wishlistItems,productToAdd)=>{
    return [...wishlistItems, { ...productToAdd}]
}
const clearWishlistItem=(productToClear,wishlistItems)=>{
    return wishlistItems.filter(wishtlistItem=>wishtlistItem.id!==productToClear.id);
}
export const WishlistProvider=({children})=>{
    const [wishlistItems,setWishlistItems]=useState([]);
    const {isloggedIn}=useContext(AuthContext)
    const addItemsToWishlist=(productToAdd)=>{
        setWishlistItems(addWishlistItem(wishlistItems,productToAdd));
    
            localStorage.setItem("userWishlist",JSON.stringify({wishlistItems:wishlistItems}))
            }
    const clearItemFromWishlist=(productToDelete)=>{
        setWishlistItems(clearWishlistItem(productToDelete,wishlistItems))
            localStorage.setItem("userWishlist",JSON.stringify({wishlistItems:wishlistItems}))
        
    }
    const value={wishlistItems,setWishlistItems,addItemsToWishlist,clearItemFromWishlist}
    return(
        <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>
    )
}