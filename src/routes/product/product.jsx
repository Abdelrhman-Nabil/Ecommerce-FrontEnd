import { Fragment } from "react";
import {useParams} from "react-router-dom";
import ProductData from "../../component/ProudctPage/product.data/Product.data";
import ProductPreview from "../../component/ProudctPage/productReview/ProductReview";
import "./product.css";
const Product= () => {

 const productId=useParams().productId
    return (
      <Fragment>
    <div className="productPreview">
      <ProductData productId={productId}/>
      <div className="second-half"> 
      <ProductPreview productId={productId}/>
      </div>
    </div>
    </Fragment>
  );
};
export default Product;