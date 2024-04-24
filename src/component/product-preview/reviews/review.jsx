import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './review.css'
import Input from '../../others/input/input';
const Review=(review)=>{
    const{value,title,details}=review.product;
    const [rating,setRating]=useState(value)

  
    return(
       <div className="view">
        <div className="header-view">
        <div className="rating-s">
          
        {[...Array(5)].map((star,index)=>{
              const currentRating=index + 1; 
              return(
                <label>
              <input 
              type="radio" name="rating" 
              value={currentRating}
              />
            <FaStar 
            className="star"
            size={30}
            color={currentRating <=(rating) ?"#ffc107":"#e4e5e9"}
            />

            </label>
            )
            })}
           </div>
          <div className='review-data'>
          <Input
          element="input"
          id="title"
          type="text"
          label="Title"
          initialValue={title}
          onIput={()=>{}}
          disabled
        />
       <div className='decription-review'>
       <Input
          element="input"
          id="title"
          type="text"
          label="Description"
          initialValue={details}
          onIput={()=>{}}
          disabled
        />
       </div>
          </div>

        </div>
       </div>
    )
}
export default Review