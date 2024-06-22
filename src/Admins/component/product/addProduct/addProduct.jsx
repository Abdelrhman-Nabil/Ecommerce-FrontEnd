import { Fragment ,useContext} from "react";
import { useNavigate } from "react-router-dom";
import {VALIDATOR_MINLENGTH,VALIDATOR_REQUIRE} from "../../../../utils/validation/validators";
import { useForm } from "../../../../utils/hooks/form-hook";
import { useHttpClinet } from "../../../../utils/hooks/http-hook";
import { AuthContext } from "../../../../context/auth.context";
import Input from "../../../../component/others/input/input";
import Button from "../../../../component/others/button/button";
import ImageUpload from "../../../../component/others/imageUpLoad/imageUpLoad";
import BackDrop from "../../../../component/others/backDrop/backDrop";
import ErrorModal from "../../../../component/others/modal/error/error";
import LoadingSpinner from "../../../../component/others/loading-sppiner/loadingSppiner";
import "./addProduct.css";
const AddProduct = () => {
  const{token,userId}=useContext(AuthContext)
  const navigate=useNavigate()
  const{isLoading,error,sendRequest,clearError}=useHttpClinet()
  const [formState, inputHandler] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      categories: {
        value: "",
        isValid: false,
      },
      color: {
        value: "",
        isValid: false,
      },
      storage: {
        value: "",
        isValid: false,
      },
      details: {
        value: "",
        isValid: false,
      },
      price: {
        value: "",
        isValid: false,
      },
      // image: {
      //   value: null,
      //   isValid: false,
      // },
    },
    false
  );

  const productSubmitHandler = async event=> {
    event.preventDefault();
    try{
      const formData=new FormData();
      formData.append('title',formState.inputs.title.value)
      formData.append('categories',formState.inputs.categories.value)
      formData.append('color',formState.inputs.color.value)
      formData.append('storage',formState.inputs.storage.value)
      formData.append('details',formState.inputs.details.value)
      formData.append('creator',userId)
      formData.append('price',formState.inputs.price.value)
     Array.from(formState.inputs.image.value).forEach(item => {
      formData.append('image', item)
    })
        await sendRequest(  process.env.REACT_APP_BACKEND_URL + "/api/product","POST",formData,{
          authorization:'Bearer '+ token
        })
        navigate('/controlPage/Products')
    }catch(err){}
  };
  return (
    <Fragment>
    {error && <BackDrop />}
    {error && <ErrorModal data={error} onClick={clearError} />}

    <div className="addProduct-page">
        <h1>Add Product</h1>
        <div className="add-product-data">
         <div className="add-product-data-formData"> 
         <form  onSubmit={productSubmitHandler}>
          {isLoading && <LoadingSpinner asOverlay />}

            <Input
              element="input"
              id="title"
              type="text"
              label="Product Name"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please enter a product Name"
              onIput={inputHandler}
            />
            <Input
              element="input"
              id="categories"
              type="text"
              label="Categories"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please Enter a categories"
              onIput={inputHandler}
            />
            <Input
              element="input"
              id="color"
              type="text"
              label="Color"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please Enter a color"
              onIput={inputHandler}
            />
            <Input
              element="input"
              id="storage"
              type="text"
              label="Storage (GB)"
              validators={[VALIDATOR_MINLENGTH(2)]}
              errorText="Please Enter a Storage"
              onIput={inputHandler}
            />
              <ImageUpload
                center
                id="image"
                onInput={inputHandler}
                errorText="Please provide an image."
              />
            <Input
              id="details"
              type="text"
              label="Description"
              validators={[VALIDATOR_MINLENGTH(10)]}
              errorText="Please Enter a Description more than 10 caracters"
              onIput={inputHandler}
            />
            <Input
              element="input"
              id="price"
              type="text"
              label="Price"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please Enter a Price"
              onIput={inputHandler}
            />
            <Button inverse type="submit" disabled={!formState.isValid}>
              Save
            </Button>
          </form>
         </div>
      </div>
    </div>
    </Fragment>
  );
};
export default AddProduct;
