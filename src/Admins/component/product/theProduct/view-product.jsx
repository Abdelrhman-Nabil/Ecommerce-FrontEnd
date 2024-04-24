import { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BackDrop from '../../../../component/others/backDrop/backDrop';
import DeleteModal from '../deleteProduct/deleteProduct';

import './view-product.css'
const ViewProduct=({product})=>{
  const [showModal, setShowModal] = useState(false);

    const navigate = useNavigate();
    const submitHandler=()=>{ 
      navigate(`/controlPage/editProduct`,{state:product})
    }
    return(
      <Fragment>
      {showModal && (<BackDrop onClick={() => {setShowModal(false);}}/>)}
      {showModal && (<DeleteModal id={product.id} onClick={() => {setShowModal(false);}}/>)}

       <div className="the-product">
        <h1> {product.title}</h1>
        <div>
          <div className="buttton-contianer">
          <button
            className="editButton"
            onClick={submitHandler}
          >
            ⚙️ edit
          </button>
          <button
            className="deleteButton"onClick={()=>{setShowModal(true)}}>
            
            🗑️ delete
          </button>
          </div>
        </div>
      </div>

    
    </Fragment>
    )   
}
export default ViewProduct