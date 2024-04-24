import { Fragment, useEffect, useState } from "react";
import AddAddmins from "../../../component/addmins/add/addAddmins";
import ViewAdmins from "../../../component/addmins/review-addmins/reviewAddmins";
import { useHttpClinet } from "../../../../utils/hooks/http-hook";

import "./adminsPage.css";
const AdminsPage = () => {
  const[addminsList,setAddminsList]=useState('')
  const{sendRequest}=useHttpClinet()

  useEffect(()=>{
  const fetchAddmin=async()=>{
    try{
      const addminsList=await sendRequest(  process.env.REACT_APP_BACKEND_URL + '/api/addAdmin/getAddminEmails')
    setAddminsList(addminsList.addminEmails)
    }catch(err){}
  }
  fetchAddmin();
 },[sendRequest])
  return (
    <Fragment>

      <div className="addminPage-body">
        <div className="addminPage-header">Addmins</div>
        <AddAddmins />
        <div className="addminPage-emailList">
              <div className="view-email-header">
              <h3>Email List</h3>
              </div>
              {addminsList&&addminsList.map((addminEmail)=>{
                return(
            <ViewAdmins   list={addminEmail}/>
                )
         })} 
          </div>
      </div>
    </Fragment>
  );
};
export default AdminsPage;
