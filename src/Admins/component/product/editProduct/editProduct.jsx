import { useContext, useEffect,Fragment } from 'react'
import { useLocation ,useNavigate} from 'react-router-dom'
import { useForm } from '../../../../utils/hooks/form-hook'
import {VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE} from '../../../../utils/validation/validators' 
import { useHttpClinet } from '../../../../utils/hooks/http-hook'
import { AuthContext } from '../../../../context/auth.context'
import Input from '../../../../component/others/input/input'
import Button from '../../../../component/others/button/button'
import BackDrop from '../../../../component/others/backDrop/backDrop'
import ErrorModal from '../../../../component/others/modal/error/error'
import LoadingSpinner from '../../../../component/others/loading-sppiner/loadingSppiner'
import ImageUpload from '../../../../component/others/imageUpLoad/imageUpLoad'
import './editProduct.css'
const EditProduct=()=>{
    const navigate=useNavigate()
    const location = useLocation();
    const {token}=useContext(AuthContext)
    const data=location.state
    const { image,title, price, id, details,storage,color,categories } = data;

    const productImage=image;
    const{isLoading,error,sendRequest,clearError}=useHttpClinet()
    const [formState,inputHandler,setFormData]=useForm({
        title:{
            value:'',
            isValid: false
        },
        categories: {
            value: '',
            isValid: false
        },
        color:{
            value: '',
            isValid: false

        },
        storage:{
            value: '',
            isValid: false

        },
        details:{
            value: '',
            isValid: false

        },
        price:{
            value: '',
            isValid: false
  
        }
    },
    false
    )
       useEffect(()=>{
        setFormData(
            {
                title:{
                    value:title,
                    isValid: true
                },
                categories: {
                    value: categories,
                    isValid: true
                },
                color:{
                    value: color,
                    isValid: true
        
                },
                storage:{
                    value:storage,
                    isValid: true
        
                },
                details:{
                    value: details,
                    isValid: true
        
                },
                price:{
                    value: price,
                    isValid: true
          
                }
              },
              true
          );
       },[title,categories, color, details, price, setFormData, storage])
    const productSubmitHandler=async e=>{
        e.preventDefault();
       try{
        const formData=new FormData();
        formData.append('title',formState.inputs.title.value)
        formData.append('categories',formState.inputs.categories.value)
        formData.append('color',formState.inputs.color.value)
        formData.append('storage',formState.inputs.storage.value)
        formData.append('details',formState.inputs.details.value)
        formData.append('price',formState.inputs.price.value)  
        {Array.from(productImage).forEach(item => {formData.append('image', item)})}
        {formState.inputs.image && Array.from(formState.inputs.image.value).forEach(item => {formData.append('image', item)})}            
        await sendRequest( process.env.REACT_APP_BACKEND_URL + `/api/product/${id}`,"PATCH",formData,{
            authorization:'Bearer '+ token
          })
       }catch(err){}
      navigate("/controlPage/Products")
    }
    return(
        <Fragment>
     {error && <BackDrop />}
    {error && <ErrorModal data={error} onClick={clearError} />}   
        <div className="editProduct-page">
        <h1>Edit Product</h1>
        <div className='edit-product-data'>
            <div className='edit-product-data-formData'>
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
             initialValue={title}
             initialValid={formState.inputs.title.isValid}
   
            />
            <Input
             element="input"
             id="categories"
             type="text"
             label="Categories"
             validators={[VALIDATOR_REQUIRE()]}
             errorText="Please Enter a categories"
             onIput={inputHandler}
             initialValue={categories}
             initialValid={formState.inputs.categories.isValid}
            />
               {<div className='imagePreview'>
              { productImage  &&(productImage).map((item)=>{
               return <img src={`${process.env.REACT_APP_BACKEND_URL}/${item}`}/>
              })}
              </div>}
             {  <ImageUpload
                center
                id="image"
                onInput={inputHandler}
                errorText="Please provide an image."
              /> }
            <Input
             element="input"
             id="color"
             type="text"
             label="Color"
             validators={[VALIDATOR_REQUIRE()]}
             errorText="Please Enter a color"
             onIput={inputHandler}
             initialValue={color}
             initialValid={formState.inputs.color.isValid}


            />
            <Input
             element="input"
             id="storage"
             type="text"
             label="Storage (GB)"
             validators={[VALIDATOR_MINLENGTH(2)]}
             errorText="Please Enter a Storage"
             onIput={inputHandler}
             initialValue={storage}
             initialValid={formState.inputs.storage.isValid}


            />
            <Input
             id="details"
             type="text"
             label="Description"
             validators={[VALIDATOR_MINLENGTH(10)]}
             errorText="Please Enter a Description more than 10 caracters"
             onIput={inputHandler}
             initialValue={details}
             initialValid={formState.inputs.details.isValid}


            />
            <Input
             element="input"
             id="price"
             type="text"
             label="Price"
             validators={[VALIDATOR_REQUIRE()]}
             errorText="Please Enter a Price"
             onIput={inputHandler}
             initialValue={price}
             initialValid={formState.inputs.price.isValid}


            />
        <Button inverse type="submit" disabled={!formState.isValid}>Save</Button>
            </form> 
        </div>
        </div>
        </div>
        </Fragment>

    )
}
export default EditProduct

