import { useLocation,useNavigate ,useParams} from "react-router-dom";
import { Fragment, useContext ,useEffect,useState} from "react";
import { FaStar } from 'react-icons/fa';
import { useForm } from "../../utils/hooks/form-hook";
import { useHttpClinet } from "../../utils/hooks/http-hook";
import { CartContext } from "../../context/cart.context";
import { VALIDATOR_MINLENGTH } from "../../utils/validation/validators";
import CartIcon from "../../component/icons/cartIcon/cartIcon";
import Button from "../../component/others/button/button";
import Input from "../../component/others/input/input";
import ViewReview from "../../component/product-preview/view-reviews/view-reviews";
import LoadingSpinner from "../../component/others/loading-sppiner/loadingSppiner";
import "./poductPreview.css";
const ProductPreview = () => {
  const navigate=useNavigate()
  const location = useLocation();
  const data=location.state
  const element=data?.fetureProductData;
 const{isLoading,sendRequest}=useHttpClinet()
 const [product,setProduct]=useState(element|| '')

 const productId=useParams().productId

 useEffect(()=>{
      const fetchProduct=async()=>{
       if(!element){
        try{
          const responseDataProduct=await 
          sendRequest(  process.env.REACT_APP_BACKEND_URL + `/api/product/product/${productId}`)
          if(responseDataProduct){
            setProduct(responseDataProduct.product);
          }
        }catch(err){}
       }
      }
      fetchProduct();
 },[sendRequest,element,productId])
  const {title, price, id, details,color,image} =product;
  const {addItemsToCart}=useContext(CartContext);
  const addProductToCart=()=>addItemsToCart(product)
  const [rating,setRating]=useState(null)
  const [hover,setHover]=useState(null)

     const [formState, inputHandler] = useForm(
      {
        title: {
          value: "",
          isValid: false,
        },
        details: {
          value: "",
          isValid: false,
        },
      },
      false
    );  
    const addReviewSubmitHandler=async(e)=>{
      // e.preventDefault();

        try{
         await sendRequest(  process.env.REACT_APP_BACKEND_URL + "/api/reviews","POST",JSON.stringify({
          title:formState.inputs.title.value,
          details:formState.inputs.details.value,
          productId:id,
          date:new Date(),
          value:rating,

        }),
       {'Content-Type':"application/json"}
       )
       navigate(`/productPreview/${id}`)
        }catch(err){}
    }
    return (
      <Fragment>
        {isLoading &&<LoadingSpinner  overlay/>}
    <div className="productPreview">
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
                <CartIcon key={id} />
                Add To Cart
              </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="second-half">
        <div className="head-review">
          <h2>Reviews</h2>
        </div>
        <div className="review-container">
          <form className="add-review" onSubmit={addReviewSubmitHandler}>
            <h3>Add a Review</h3>
           <div className="rating">
           {[...Array(5)].map((star,index)=>{
              const currentRating=index + 1; 
              return(
                <label>
              <input 
              type="radio" name="rating" 
              value={currentRating}
              onClick={()=>{setRating(currentRating)}}    // 1
              />
            <FaStar 
            className="star"
            size={30}
            color={currentRating <=(hover ||rating) ?"#ffc107":"#e4e5e9"}
            onMouseEnter={()=>{setHover(currentRating)}}
            onMouseLeave={()=>{setHover(null)}}
            />

            </label>
            )
            })}
           </div>
            <Input
          element="input"
          id="title"
          type="text"
          label="title"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter a more than 5 Caracters"
          onIput={inputHandler}
        />
        <Input
          element="input"
          id="details"
          type="text"
          label="Description"
          validators={[VALIDATOR_MINLENGTH(10)]}
          errorText="Please enter a more than 10 Caracters"
          onIput={inputHandler}
        />
           <div className="send-revivew-button">
           <Button  inverse type="submit" disabled={!formState.isValid}>
              Submit Review
            </Button>
           </div>
          </form>
          <div className="display-review">
            <h3>All Review</h3>
            <div className="viewReview"><ViewReview  productId={productId}/></div>
          </div>
        </div>
      </div>
    </div>
    </Fragment>
  );
};
export default ProductPreview;
