import { useEffect, useState } from 'react';
import { useHttpClinet } from '../../../utils/hooks/http-hook'
import Review from '../reviews/review';
import './view-reviews.css'
const ViewReview=({productId})=>{
   const {sendRequest}=useHttpClinet();
   const [loadedReviews,setLoadedReviews]=useState([])
   useEffect(()=>{
    const fetchReview=async()=>{
      try{
        const responseDataReview=await sendRequest(  process.env.REACT_APP_BACKEND_URL + `/api/reviews/product/${productId}`)
        if(responseDataReview){
            setLoadedReviews(responseDataReview.review)
         }
       }
       catch(err){}
    }
    fetchReview();
  },[sendRequest,productId])
    return(
        <div>
 {loadedReviews && loadedReviews.map((loadedReview)=>{
                return(
            <Review  product={loadedReview}/>
                )
         })}       
           </div>
)
}
export default ViewReview