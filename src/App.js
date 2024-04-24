import { Route,Routes } from "react-router-dom"
import { useContext, useEffect } from "react"
import { AuthContext } from "./context/auth.context.jsx"
import { CartContext } from "./context/cart.context.jsx"
import { WishlistContext } from "./context/wishlist.context.jsx"
import Navigation from "./routes/navigation/navigation"
import Home from "./routes/home/home"
import Auth from "./routes/auth/auth"
import AllProduct from "./routes/allProducts/allPorducts"
import SearchPage from "./routes/searchPage/searchPage.jsx"
import ProductPreview from "./routes/productPreview/productPreview.jsx"
import CategoriesPage from "./routes/categories/categories"
import CheckOut from './routes/checkOut/checkOut.jsx'
import PaymentForm from "./component/payment/pymentForm/paymentForm.jsx"
import ClientOrderPage from "./routes/account/orderPage/ordersPage.jsx"
import CheckOutSucess from "./component/paymentButton/checkOutSuccess/checkOutSuccess.jsx"
// addmin page

import AdminPageNav from "./Admins/Routes/control/AdminPageNav"
import DashBoard from "./Admins/Routes/routes/dashBoard/dashBoard"
import Products from "./Admins/Routes/routes/Products/products"
import AddProduct from "./Admins/component/product/addProduct/addProduct"
import EditProduct from "./Admins/component/product/editProduct/editProduct"
import OrderPage from "./Admins/Routes/routes/Orders/addOrders"
import AdminsPage from "./Admins/Routes/routes/Admins/adminsPage.jsx"
import FetureProduct from "./Admins/Routes/routes/fetureProduct/fetureProduct.jsx"


const App=()=>{
  const{login}=useContext(AuthContext);
  const{ setCartItems}=useContext(CartContext)
  const{setWishlistItems}=useContext(WishlistContext)
  useEffect(()=>{
    const storeData=JSON.parse(localStorage.getItem('userData'));
    if(storeData && storeData.token && new Date(storeData.expiration) > new Date()){
      login(storeData.userId,storeData.token,new Date(storeData.expiration) )
    }
    const CartData=JSON.parse(localStorage.getItem("userCart"));
    if(CartData){
       setCartItems(CartData.cartItems)
    }
    const userWishlist=JSON.parse(localStorage.getItem("userWishlist"));

    if(userWishlist){
      setWishlistItems(userWishlist.Wishlist)
    }

  },[login, setCartItems,setWishlistItems])
  return(
    <Routes>
      <Route path="/" element={<Navigation/>}>
      <Route index element={<Home/>}/>
      <Route path="auth" element={<Auth/>}/>
      <Route path="allProduct" element={<AllProduct/>}/>
      <Route path="SearchPage" element={<SearchPage/>}/>
      <Route path="productPreview/:productId" element={<ProductPreview/>}/>
      <Route path="CategoriesPage" element={<CategoriesPage/>} />
      <Route path="clientOrders" element={<ClientOrderPage/>}/>
      <Route path="checkout" element={<CheckOut />} />
      <Route path="checkOut-success" element={<CheckOutSucess/>}/>
      <Route path="PaymentForm" element={<PaymentForm/>}/>

      </Route>
      <Route path="/controlPage" element={<AdminPageNav/>}>
      <Route path="dashBoard" element={<DashBoard/>}/>
      <Route path="Products" element={<Products/>}/>
      <Route path='addProduct' element={<AddProduct/>}/>
      <Route path="EditProduct" element={<EditProduct/>}/>
      <Route path="Orders" element={<OrderPage/>}/>
      <Route path="Admins" element={<AdminsPage/>}/>
      <Route path="FetureProduct" element={<FetureProduct/>}/>
      </Route>
  
    </Routes>
  )
}
export default App