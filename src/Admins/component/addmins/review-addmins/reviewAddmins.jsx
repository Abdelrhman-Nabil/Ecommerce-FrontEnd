import { Fragment ,useState} from "react";
import BackDrop from "../../../../component/others/backDrop/backDrop";
import DeleteAddminEmail from "../deleteEmail/deleteEmail";
import "./reviewAddmins.css";
const ViewAdmins = ({ list }) => {
    const [showModal, setShowModal] = useState(false);
  const date=list.date.slice(0,10)
  return (
    <Fragment>
    {showModal && (<BackDrop onClick={() => {setShowModal(false);}}/>)}
    {showModal && (<DeleteAddminEmail id={list.id} onClick={() => {setShowModal(false);}}/>)}

        <div className="view-email-list">
        <p className="list">{list.email}</p>
        <p className="list-time">{date}</p>
          <div>
            <div className="view-email-list-buttton-contianer">
              <button className="view-email-list-deleteButton" onClick={()=>{setShowModal(true)}}>🗑️ delete</button>
            </div>
          </div>
        </div>
    </Fragment>
  );
};
export default ViewAdmins;
