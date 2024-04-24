import { useNavigate } from 'react-router-dom';
import Button from '../../button/button';
import './alert.css'
const  AlartModal=({data,onClick,nav})=>{
  const navigate=useNavigate()

  const navHnadler=()=>{
    navigate(`${nav}`)
  }
  return(
    <div className="modal">
      <header className='modal-header'>
        <h2>Needed to alert you About </h2>
        </header>
        <form>
        <div className={'modal-content'}>
         <h2> {data}</h2>
        </div>
        <footer className={'modal-footer'}>
          <Button inverse  onClick={onClick}>close</Button>
          <Button inverse onClick={navHnadler}>Go to Log in</Button>
        </footer>
      </form>
    </div>
  )
}
export default AlartModal