import { createContext, useState, useEffect } from "react";
const addCardItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);
    if (existingCartItem) {
    return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } :  cartItem )
        
    }
    return [...cartItems, { ...productToAdd, quantity: 1 }]
}

const removeCartItem=(cartItems,productToRemove)=>{
 const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToRemove.id);

 if(existingCartItem.quantity===1){
    return cartItems.filter(cartItem=>cartItem.id !==productToRemove.id)
 }

 return cartItems.map((cartItem) => cartItem.id === productToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } :  cartItem )


}
const clearCartItem=(cartItems,productToClear)=>{
    return cartItems.filter(cartItem=>cartItem.id!==productToClear.id);
}
export const CartContext = createContext({
    IsCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    // cartItemsTitle:[],
    // addCartItemsTitle: () => { },
    addItemsToCart: () => { },
    removeItemFromCart:()=>{},
    clearItemFromCart:()=>{},
    cartCount: 0,
    cartTotal:0,
    IsAccoutCartOpen: false,
    setIsAccoutCartOpen: () => {},
})
export const CartProvider = ({ children }) => {
    const [IsAccoutCartOpen, setIsAccoutCartOpen] = useState(false)
    const [IsCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal]=useState(0);
    const [totalOrder,setTotalOrder]=useState(0)

   useEffect((()=>{
    const newTotalCart=cartItems.reduce((total,cartItem)=>total +cartItem.quantity * cartItem.price ,0)
   setCartTotal(newTotalCart);   
}),[cartItems])

  useEffect(()=>{
    const newCartCount=cartItems.reduce((total,cartItem)=> total + cartItem.quantity,0)
    setCartCount(newCartCount);
  },[cartItems]);


    const addItemsToCart = (productToAdd) => {
        setCartItems(addCardItem(cartItems, productToAdd))
        localStorage.setItem("userCart",JSON.stringify({cartItems:cartItems}))

    }

    const removeItemFromCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove))
    }
    const clearItemFromCart=(productToClear)=>{
        setCartItems(clearCartItem(cartItems,productToClear))
    }


 const value = {
   IsCartOpen,
   setIsCartOpen,
   cartItems,
   setCartItems,
   addItemsToCart,
   cartCount,
   removeItemFromCart,
   clearItemFromCart,
   cartTotal,
   IsAccoutCartOpen,
   setIsAccoutCartOpen,
   totalOrder
   ,setTotalOrder

};
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}

