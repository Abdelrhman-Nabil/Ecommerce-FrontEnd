import './payment-element.css'
const PaymentElement=({cartItem})=>{
    const{title,quantity,image,price}=cartItem;
return(

        <div className='payment-element-container'>
              <img  src={`${process.env.REACT_APP_BACKEND_URL}/${image[0]}`} alt={title}/>
            <div className='payment-element-details'>
                <span className='name'>{title}</span>
                <span className='price'>{quantity} x {price}</span>
            </div>
        </div>
    )
}
export default PaymentElement