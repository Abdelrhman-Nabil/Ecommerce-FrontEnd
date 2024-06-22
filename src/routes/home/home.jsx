import { useHttpClinet } from "../../utils/hooks/http-hook";
import { useState, useEffect, Fragment } from "react";
import HomePage from "../../component/home/homePage/homePage";
import BackDrop from "../../component/others/backDrop/backDrop";
import LoadingSpinner from "../../component/others/loading-sppiner/loadingSppiner";
import ErrorModal from "../../component/others/modal/error/error";
const Home = () => {
  const { error, isLoading, clearError, sendRequest } = useHttpClinet();
  const [loadedProduct, setLoadedProduct] = useState();
  const [loadedfaceProduct, setloadedfaceProduct] = useState('');


   useEffect(()=>{
     const fetchFetureProductId=async()=>{
       try{
        const responseFetureProductId=await sendRequest(process.env.REACT_APP_BACKEND_URL + "/api/interfaceProduct/getInterfaceProduct")
        if(responseFetureProductId){
 
  
        }
        let lastId,id;
        if(responseFetureProductId.products){
          lastId=responseFetureProductId.products[responseFetureProductId.products.length -1].id
          id=lastId || ''
        }
        const responseDataFaceProduct = await sendRequest(
          process.env.REACT_APP_BACKEND_URL +
            `/api/product/product/${id}`
        );
        if (responseDataFaceProduct) {
          setloadedfaceProduct(responseDataFaceProduct.product);
        }
  
       }
       catch(err){}
     }
     fetchFetureProductId();
   },[sendRequest])

  useEffect(() => {
  
    const fetchUsers = async () => {
      try {
        const responseDataProduct = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + "/api/product/allProduct"
        );

        if (responseDataProduct) {
          setLoadedProduct(responseDataProduct.products);
        }

      } catch (err) {}
    };
    fetchUsers();
  
}, [sendRequest]);
  


  let NewArrivals = loadedProduct;
  if (loadedProduct) {
    NewArrivals = loadedProduct.slice(-5);
  }
  
  
  return (
    <Fragment>
      {error && <BackDrop />}
      {error && <ErrorModal data={error} onClick={clearError} />}
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}

      {!isLoading && loadedProduct && loadedfaceProduct && (
        <HomePage products={NewArrivals} fetureProduct={loadedfaceProduct} />
      )}
    </Fragment>
  );
};

export default Home;
