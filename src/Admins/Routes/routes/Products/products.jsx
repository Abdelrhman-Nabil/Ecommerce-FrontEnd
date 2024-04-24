import { Fragment, useState,useEffect } from "react";
import { useHttpClinet } from "../../../../utils/hooks/http-hook";
import { useNavigate } from "react-router-dom";
import Button from "../../../../component/others/button/button";
import BackDrop from "../../../../component/others/backDrop/backDrop";
import ViewProduct from "../../../component/product/theProduct/view-product";
import "./products.css";
import ErrorModal from "../../../../component/others/modal/error/error";
const Products = () => {
  const navigate = useNavigate();
const{error,sendRequest,clearError}=useHttpClinet()
  const [loadedProducts, setLoadedProducts] = useState();
  useEffect(()=>{
    const fetchProduct=async()=>{
      try{
        const responseDataProduct=await sendRequest(  process.env.REACT_APP_BACKEND_URL + '/api/product/allProduct')
        if(responseDataProduct){
          setLoadedProducts(responseDataProduct.products);
         }
       }
       catch(err){}
    }
    fetchProduct();
  },[sendRequest])

  return (
    <Fragment>
       {error && <BackDrop />} 
       {error && <ErrorModal data={error} onClick={clearError} />}
      <div className="product-page">
      <div className="product-page-header">
      <Button onClick={() => {navigate("/controlPage/addProduct");}}>Add New Product</Button>
      </div>
      <div>
      <div className="view-product">
              <div className="view-product-header">
              <h3>Product Name</h3>
              </div>
              <div className="ViewProduct">
              {loadedProducts&&loadedProducts.map((loadedProduct)=>{
                return(
            <ViewProduct product={loadedProduct}/>
                )
         })} 
              </div>
          </div>
        </div> 
      </div>
    </Fragment>
  );
};
export default Products;
         
