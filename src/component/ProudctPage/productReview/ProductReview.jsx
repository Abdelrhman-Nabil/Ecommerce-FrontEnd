import { Fragment,useState} from "react";
import { FaStar } from 'react-icons/fa';
import { useForm } from "../../../utils/hooks/form-hook";
import { useHttpClinet } from "../../../utils/hooks/http-hook";
import { VALIDATOR_MINLENGTH } from "../../../utils/validation/validators";
import Button from "../../others/button/button";
import Input from "../../others/input/input";
import ViewReview from "../../product-preview/view-reviews/view-reviews";
import "./ProductReview.css";
const ProductPreview = ({productId}) => {
 const{sendRequest}=useHttpClinet()

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
          productId:productId,
          date:new Date(),
          value:rating,

        }),
       {'Content-Type':"application/json"}
       )
        }catch(err){}
    }
    return (
      <Fragment>
      <div className="second-half">
        <div className="head-review">
          <h2>Reviews</h2>
        </div>
        <div className="review-container">
        <div className="review-container-frist-half">
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
        </div>
          <div className="display-review">
            <h3>All Review</h3>
            <div className="viewReview"><ViewReview  productId={productId}/></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default ProductPreview;