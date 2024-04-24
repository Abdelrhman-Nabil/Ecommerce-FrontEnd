import { useNavigate, } from 'react-router-dom'
import { Fragment, useContext } from 'react'
import { CartContext } from '../../../../context/cart.context'
import Button from '../../button/button'
import './success.modal.css'
const SuccessModal=()=>{
  const {setCartItems}=useContext(CartContext)
    const navigate=useNavigate()
    const closeHndler=()=>{
        navigate('/')
        setCartItems([])
          }
    return(
       <Fragment>
         <div className="sucmodal">
          <header className='sucmodal-header'>
            <h2>success</h2>
            </header>
            <form>
            <div className={'sucmodal-content'}>
             <h2>Success Payment <br/>Your Order in the way</h2>
            </div>
            <footer className={'sucmodal-footer'}>
              <Button inverse onClick={closeHndler}>close</Button>
              
            </footer>
          </form>
        </div>
       </Fragment>
      )
}
export default SuccessModal