import { useNavigate } from "react-router-dom";
import { Fragment ,useContext } from "react";
import { CartContext } from "../../../context/cart.context";
import HomeItem from "../homeItem/homeItem";
import CartIcon from "../../icons/cartIcon/cartIcon";
import Button from "../../others/button/button";
import "./homePage.css";
const HomePage = ({products,fetureProduct}) => {
  const navigate=useNavigate()
  const {addItemsToCart}=useContext(CartContext);  

  const{image,title,id,details}= fetureProduct  || "" 
  const addProductToCart=()=>addItemsToCart(fetureProduct)

  const featureHandler=()=>{
      navigate(`/productPreview/${id}`,{state:{fetureProduct}})
    
  }
  return (
    <Fragment>
      <div className="HomePage">
      <div className="frist-Home-Element">
        <div className="frist-Home-Element-container">
          <div className="frist-Home-Element-description">
            <h1>{title}</h1>
            <p className="p">
              {details}
              </p>
            <div className="frist-Home-Element-button-container">
              <Button inverse onClick={featureHandler}>Read More</Button>
              <Button danger onClick={addProductToCart} >
                <CartIcon />
                Add To Cart
              </Button>
            </div>
          </div>
          <div className="Image-contianer" >
          <img  src={`${process.env.REACT_APP_BACKEND_URL}/${image[0]}`} onClick={featureHandler} alt={title}/>   
                 </div>
        </div>
      </div>
      <div className="categories-container">
        <h1>New Arrivals</h1>
        <div className="product-container">
          {products &&
            products.map((products) => (
              <HomeItem key={products.id} product={products} />))}
          
        </div>
      </div>
      </div>
    </Fragment>
  );
};
export default HomePage;
