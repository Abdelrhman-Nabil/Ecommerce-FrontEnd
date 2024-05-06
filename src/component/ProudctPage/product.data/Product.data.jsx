import { Fragment, useContext ,useEffect,useState} from "react";
import { useHttpClinet } from "../../../utils/hooks/http-hook";
import { CartContext } from "../../../context/cart.context";
import Button from "../../others/button/button";
import "./product.data.css";
const ProductData = ({productId}) => {
 const{isLoading,sendRequest}=useHttpClinet()
 const [product,setProduct]=useState('')

 useEffect(()=>{
      const fetchProduct=async()=>{

        try{
          const responseDataProduct=await 
          sendRequest(  process.env.REACT_APP_BACKEND_URL + `/api/product/product/${productId}`)
          if(responseDataProduct){
            setProduct(responseDataProduct.product);
          }
        }catch(err){}
      }
      fetchProduct();
 },[sendRequest,productId])
  const {title, price,details,color,image} =product;
  const {addItemsToCart}=useContext(CartContext);
  const addProductToCart=()=>addItemsToCart(product)

    return (
      <Fragment>
      <div className="frist-half">
        <div className="productPreview-container">
          <div className="images-contianer">
            <div className="image-Card">
              <div className="frist-image">
                {!isLoading &&product&&<img src={`${process.env.REACT_APP_BACKEND_URL}/${image[0]}`} alt={title}/>}
              </div>
              <div className="other-image">
              {!isLoading &&product &&<img src={`${process.env.REACT_APP_BACKEND_URL}/${image[1]}`} alt={title}/>}
              {!isLoading &&product &&<img src={`${process.env.REACT_APP_BACKEND_URL}/${image[2]}`} alt={title}/>}
              {!isLoading &&product &&<img src={`${process.env.REACT_APP_BACKEND_URL}/${image[3]}`} alt={title}/>}
              </div>
            </div>
          </div>
          <div className="product-Data">
            <h1>{title}</h1>
            <p className="p-product">{details}</p>
            <p className="p-product">Available color is: {color}</p>
            <div>
              <h2>{price} $</h2>
              <div className="p-product-button">
              <Button onClick={addProductToCart} >
                Add To Cart
              </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default ProductData;
