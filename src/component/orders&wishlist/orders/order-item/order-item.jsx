import './oreder-item.css'
const OrderItem=({data})=>{


    const{date,total,product}=data
    const products=product.map(i=>i.map(s=>s.title));
    const productw=products.join(" -   ")
  
    const thedate=date.slice(0, 10)
    return(
      
        <div className='cart-item-containers'>
        <div className='cart-item-container-item-details'>
            <span className='name'>{productw}</span>
            <span className='price'> the Total is: {total}</span>
        </div>
        <div className='order-time'>
            <span className='order-item-time'>{thedate}</span>
            <span>arrive at 5 day </span>
        </div>
       </div>
    
    )
}
export default OrderItem