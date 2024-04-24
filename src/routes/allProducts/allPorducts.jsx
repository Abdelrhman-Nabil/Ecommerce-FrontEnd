import { useHttpClinet } from '../../utils/hooks/http-hook';
import HomeItem from '../../component/home/homeItem/homeItem';
import './allPorducts.css'
import { Fragment, useEffect, useState } from 'react';
import LoadingSpinner from '../../component/others/loading-sppiner/loadingSppiner';
import BackDrop from '../../component/others/backDrop/backDrop';
import ErrorModal from '../../component/others/modal/error/error';
const AllProduct=()=>{

const {isLoading,error,clearError,sendRequest}=useHttpClinet()
const [loadedProduct, setLoadedProduct] = useState();
useEffect(()=>{
  const fetchUsers=async()=>{
    try{
      const responseDataProduct=await sendRequest(  process.env.REACT_APP_BACKEND_URL + '/api/product/allProduct')
      if(responseDataProduct){
        setLoadedProduct(responseDataProduct.products);
       }
     }
     catch(err){}
  }
  fetchUsers();
},[sendRequest])
return(
  <Fragment>
    {error && <BackDrop />}
    {error && <ErrorModal data={error} onClick={clearError} />}   

     <div className="allProduct-page">
     {isLoading && <LoadingSpinner overlay/>}
    <h2>All Products</h2>
    <div className='preview-products'>
    {loadedProduct &&loadedProduct.map((product) => (
              <HomeItem key={product.id} product={product} />
            ))}
    </div>
   </div>
  </Fragment>

    )
}
export default AllProduct