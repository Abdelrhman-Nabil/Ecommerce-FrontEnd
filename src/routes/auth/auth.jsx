import { VALIDATOR_EMAIL, VALIDATOR_MIN,VALIDATOR_REQUIRE } from "../../utils/validation/validators";
import { useForm } from "../../utils/hooks/form-hook";
import { useHttpClinet } from "../../utils/hooks/http-hook";
import { useState , useContext, Fragment} from "react";
import { AuthContext } from "../../context/auth.context";
import { useNavigate } from "react-router-dom";
import Input from "../../component/others/input/input";
import Button from "../../component/others/button/button";
import ImageUploadAuth from "../../component/others/imageUpLoad auth/ImageUploadAuth";
import LoadingSpinner from '../../component/others/loading-sppiner/loadingSppiner'
import ErrorModal from '../../component/others/modal/error/error';
import BackDrop from "../../component/others/backDrop/backDrop";
import "./auth.css";
const Auth = () => {
  const navigate=useNavigate()
  const{login}=useContext(AuthContext)
  const [isLoginMode, setIsLoginMode] = useState(true);
const {isLoading,error,sendRequest,clearError}=useHttpClinet()
const [formState,inputHandler,setFormData]=useForm({
  email: {
    value: '',
    isValid: false
  },
  password: {
    value: '',
    isValid: false
  }
},
false
)
const switchModeHandler=()=>{
   if(!isLoginMode){
     setFormData({
      ...formState.inputs,
      name:undefined,
      image: undefined,
      address:undefined,

     },
     formState.inputs.email.isValid && formState.inputs.password.isValid
     )

   }
    else{
    setFormData({
      ...formState.inputs,
      name:{
        value:'',
        isValid:false
      },
      image:{
        value:'',
        isValid:false
      },      
      address:{
        value:'',
        isValid:false
      },
    },
     false
    )
   }
   setIsLoginMode(prevMode=>!prevMode)
  }
  const authSubmitHandler= async event=>{
    event.preventDefault();
    if(isLoginMode){
      try{
      const responseData=await sendRequest(  process.env.REACT_APP_BACKEND_URL + '/api/users/logIn',"POST",JSON.stringify({
       email:formState.inputs.email.value,
       password:formState.inputs.password.value,
      }),
    {'Content-Type':"application/json"}
    ) 
    {responseData.addmin===true ?navigate('/controlPage/dashboard'):navigate('/')}

     login(responseData.userId,responseData.token);
      console.log(responseData.userId)
      }catch(err){}
     
    }
    else{
        try{
          const formData=new FormData();
          formData.append('name',formState.inputs.name.value)
          formData.append('email',formState.inputs.email.value)
          formData.append('password',formState.inputs.password.value)
          formData.append('address',formState.inputs.address.value)
          formData.append('image',formState.inputs.image.value)
          const responseData=await sendRequest(  process.env.REACT_APP_BACKEND_URL + '/api/users/signup','POST',formData);
        login(responseData.userId,responseData.token);
        navigate('/')
            }catch(err){}

    }
  }

  return (
   <Fragment>
      {error && <BackDrop />}
      {error && <ErrorModal data={error} onClick={clearError} />}
     <div className={`${isLoginMode &&'authPage'} ${!isLoginMode &&'authPageSignUp'}`}>
      <form  onSubmit={authSubmitHandler}>
      {isLoading && <LoadingSpinner asOverlay />}
      {isLoginMode ? (
          <h4>Already have an account?</h4>
        ) : (
          <h4>Sign up with Email and Password</h4>
        )}
        <div className={`${!isLoginMode && 'frist-element-sign-up'}`}>
        {!isLoginMode && (
            <ImageUploadAuth
              center
              id="image"
              onInput={inputHandler}
            />
          )}
        </div>
        <div className={`${!isLoginMode && 'second-element-sign-up'}`}>
        {!isLoginMode &&
        <Input
        element="input"
        id="name"
        type="text"
        label="Name"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a Name"
        onIput={inputHandler}
        />
        }
        <Input
        element="input"
        id="email"
        type="text"
        label="Email"
        validators={[VALIDATOR_EMAIL()]}
        errorText="Please enter a email."
        onIput={inputHandler}
        />
         <Input
        element="input"
        id="password"
        type="password"
        label="Password"
        validators={[VALIDATOR_MIN(10)]}
        errorText="Please enter a password."
        onIput={inputHandler}
        />
        {!isLoginMode && <Input
          element="input"
          id="address"
          type="test"
          label="Address"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a address."
          onIput={inputHandler}
          />}
        <Button inverse type="submit" disabled={!formState.isValid}>{isLoginMode ? "LOGIN" : "SIGNUP"}</Button>
        </div>
      </form>
      <div className={`${!isLoginMode ?'thired-element-sign-up':"thired-element-log-in"} `}>
      <Button className={`${!isLoginMode &&'button-signUp-page'} `} onClick={switchModeHandler}>SWITCH TO {isLoginMode ? "SIGNUP" : "LOGIN"}

</Button>
</div>
</div>
    
   </Fragment>
  );
};
export default Auth;
