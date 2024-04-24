import Button from '../../button/button';
import './error.css'
const  ErrorModal=({data,onClick})=>{
  return(
    <div className="modal">
      <header className='modal-header'>
        <h2>An error Occured !</h2>
        </header>
        <form>
        <div className={'modal-content'}>
         <h2> {data}</h2>
        </div>
        <footer className={'modal-footer'}>
          <Button inverse  onClick={onClick}>close</Button>
          
        </footer>
      </form>
    </div>
  )
}
export default ErrorModal