import { useState, useEffect, Fragment } from "react";
import HomeItem from "../../component/home/homeItem/homeItem";
import "./searchPage.css";
import { useHttpClinet } from "../../utils/hooks/http-hook";
import LoadingSpinner from "../../component/others/loading-sppiner/loadingSppiner";
const SearchPage = () => {

  const [searchField, setSearchField] = useState("");
  const [filterProducts, setFilterProducts] = useState();
  const{isloading,sendRequest}=useHttpClinet()

  useEffect(()=>{
    const fetchUsers=async()=>{
      try{
        const responseDataProduct=await sendRequest(  process.env.REACT_APP_BACKEND_URL + '/api/product/allProduct')
        if(responseDataProduct ){
          setFilterProducts(responseDataProduct.products)
         }
       }
       catch(err){}

    }
    fetchUsers();
    
  },[sendRequest]);


   useEffect(() => {
    if(filterProducts){
    const NewfilterProduct = filterProducts.filter((product) => {
      return product.title.toLocaleLowerCase().includes(searchField);
    });
    setFilterProducts(NewfilterProduct);
  }
  }, [searchField, filterProducts])

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };
  return (
    <Fragment>        
      {isloading && <LoadingSpinner overlay/>}
    <div className="search-page">
      <div className="input-field">
        <input
          type="text"
          className="search-box"
          onChange={onSearchChange}
          placeholder="Search For Products "
        />
      </div>
        <div className="View-filterProducts">
        { filterProducts &&filterProducts.map((product) => {
          return (<HomeItem key={product.id} product={product} />);
        })}
        
      </div> 
    </div>
    </Fragment>

  );
};
export default SearchPage;
