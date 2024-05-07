import { Fragment } from 'react'
import { VALIDATOR_EMAIL } from '../../../../utils/validation/validators'
import { useHttpClinet } from '../../../../utils/hooks/http-hook'
import { useForm } from '../../../../utils/hooks/form-hook'
import LoadingSpinner from '../../../../component/others/loading-sppiner/loadingSppiner'
import BackDrop from '../../../../component/others/backDrop/backDrop'
import ErrorModal from '../../../../component/others/modal/error/error'
import Button from '../../../../component/others/button/button'
import Input from '../../../../component/others/input/input'
import './addAddmins.css'
import { useNavigate } from 'react-router-dom'
const AddAddmins=()=>{
  const navigate=useNavigate()
    const{isLoading,error,sendRequest,clearError}=useHttpClinet()
    const [formState, inputHandler] = useForm(
        {
          email: {
            value: "",
            isValid: false,
          },
        },
        false
      );


      const addminSubmitHandler = async event=> {
        try{
            await sendRequest( process.env.REACT_APP_BACKEND_URL + "/api/addAdmin","POST",JSON.stringify({
              email:formState.inputs.email.value,
              date:new Date(),
            }),{
              'Content-Type':"application/json"
            })
            navigate("/controlPage/Admins")
          }catch(err){}
      };
return(
    <Fragment>
    {error && <BackDrop />}
    {error && <ErrorModal data={error} onClick={clearError} />}
    <div className='addAdmins-data'>
             <form onSubmit={addminSubmitHandler}>
          {isLoading && <LoadingSpinner asOverlay />}

            <Input
              element="input"
              id="email"
              type="email"
              label="Email"
              validators={[VALIDATOR_EMAIL()]}
              errorText="Please enter a email"
              onIput={inputHandler}
            />
            <Button inverse type="submit" disabled={!formState.isValid}>
              Save
            </Button>
          </form>
    </div>

    </Fragment>
)
}
export default AddAddmins