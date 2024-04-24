import { Fragment } from "react"
import { useHttpClinet } from "../../../../utils/hooks/http-hook";
import Button from "../../../../component/others/button/button";
import LoadingSpinner from "../../../../component/others/loading-sppiner/loadingSppiner";
import BackDrop from "../../../../component/others/backDrop/backDrop";
import ErrorModal from "../../../../component/others/modal/error/error";
import './deleteEmail.css'
const DeleteAddminEmail=({onClick,id})=>{
  const { error,clearError,isLoading,sendRequest} = useHttpClinet();
  const deleteHandler=async()=>{
    try{
         await sendRequest(  process.env.REACT_APP_BACKEND_URL +`/api/addAdmin/${id}`,'DELETE',null)
    }
    catch(error){}
  }
    return (
        <Fragment>
          {error && <BackDrop />}
          {error && <ErrorModal data={error} onClick={clearError} />}   

        <div className="deleteEmailModal">
        {isLoading && <LoadingSpinner asOverlay />}
      <header className='deleteEmailModal-header'>
        <h2>Are you sure ?</h2>
        </header>
        <form>
        <div className='deleteEmailModal-content'>
        <p>Do you want to process and delete this Email ? Please note that it can't be undone thereafter</p>
        </div>
        <footer className='deleteEmailModal-footer'>
          <Button inverse onClick={onClick}>close</Button>
          <Button inverse onClick={deleteHandler}>Delete</Button>
        </footer>
      </form>
    </div>
      </Fragment>
        )
}
export default DeleteAddminEmail