import { useEffect, useState,Fragment } from "react";
import { useHttpClinet } from "../../../../utils/hooks/http-hook";
import BackDrop from "../../../../component/others/backDrop/backDrop";
import ErrorModal from "../../../../component/others/modal/error/error";
import "./fetureProduct.css";
const FetureProduct = () => {
  const{error,sendRequest,clearError}=useHttpClinet()
  const [loadedfaceProduct, setloadedfaceProduct] = useState('');
  const [data, setData] = useState('')
  useEffect(()=>{
    const fetchProducts=async()=>{
      try{
        const responseDataFaceProduct=await sendRequest(process.env.REACT_APP_BACKEND_URL + "/api/product/allProduct")
        if(responseDataFaceProduct){
          setloadedfaceProduct(responseDataFaceProduct.products)
         }
       }
       catch(err){}
    }
    fetchProducts();
  },[sendRequest])


      const sumbitHnadler= async(e)=>{
        e.preventDefault();
        try{
         
          await sendRequest(  process.env.REACT_APP_BACKEND_URL + `/api/interfaceProduct/add`,"POST",JSON.stringify({
            id:data,
           }),
         {'Content-Type':"application/json"}
         ) 
        }
        catch(err){}
      }


      const onOptionChangeHandler = (event) => {
        setData(event.target.value);
    };    return(
    <Fragment>
      {error && <BackDrop />}
      {error && <ErrorModal data={error} onClick={clearError} />}

    <div className='FetureProduct-body'>

      <div className='FetureProduct-header'>The Feture Product</div>
        <div className="FetureProduct-options">
          <label>Select Feture Product</label>
        <div className="select">
        <form onSubmit={sumbitHnadler}>
        <select onChange={onOptionChangeHandler} className="custom-select"  >
       <option></option>
       { loadedfaceProduct && loadedfaceProduct.map((productd)=>{
         const{title,id}=productd
        return(
          <option value={id}>{title}</option>
        )
       })}
        </select>
        <button className="feture-product-button" type="sumbit">Sumbit select</button>
        </form>
      </div>
        </div>
     </div>
    </Fragment>   
  )
}
export default FetureProduct;
 


