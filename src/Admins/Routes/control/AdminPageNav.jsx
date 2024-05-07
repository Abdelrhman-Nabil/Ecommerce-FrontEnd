import { NavLink , Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import  {AuthContext} from '../../../context/auth.context'
import './AdminPageNav.css'
const AdminPageNav=()=>{
  const navigate=useNavigate()
  const {logout}=useContext(AuthContext)
  const logOutHandler=()=>{
    logout();
    navigate('/')
  }
return(
<div className='plan-View'>
<nav>
  <ul>
    <li>
      <p>
      <svg width="100px" height="100px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M5 3C3.89543 3 3 3.89543 3 5V6.83772L1.49006 11.3675C1.10052 12.5362 1.8474 13.7393 3 13.963V20C3 21.1046 3.89543 22 5 22H9H10H14H15H19C20.1046 22 21 21.1046 21 20V13.963C22.1526 13.7393 22.8995 12.5362 22.5099 11.3675L21 6.83772V5C21 3.89543 20.1046 3 19 3H5ZM15 20H19V14H17.5H12H6.5H5V20H9V17C9 15.3431 10.3431 14 12 14C13.6569 14 15 15.3431 15 17V20ZM11 20H13V17C13 16.4477 12.5523 16 12 16C11.4477 16 11 16.4477 11 17V20ZM3.38743 12L4.72076 8H6.31954L5.65287 12H4H3.38743ZM7.68046 12L8.34713 8H11V12H7.68046ZM13 12V8H15.6529L16.3195 12H13ZM18.3471 12L17.6805 8H19.2792L20.6126 12H20H18.3471ZM19 5V6H16.5H12H7.5H5V5H19Z" fill="#000000"></path> </g></svg>
        <span className='span-header'> EcommerceAdmin</span>
      </p>
    </li>
    <li>
      <NavLink  to={"/controlPage/dashBoard"}>
      <svg fill="#000000" width="100px" height="100px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="home"> <path d="M29.71,15.29l-3-3h0l-10-10a1,1,0,0,0-1.42,0l-10,10h0l-3,3a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L5,15.41V29a1,1,0,0,0,1,1H26a1,1,0,0,0,1-1V15.41l1.29,1.3a1,1,0,0,0,1.42,0A1,1,0,0,0,29.71,15.29ZM25,28H7V13.41l9-9,9,9Z"></path> </g> </g></svg>
        <span> DashBoard</span>
      </NavLink>
    </li>
    <li>
      <NavLink to={"/controlPage/Products"}>
      <svg width="100px" height="100px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 14H15M4.6 10H19.4C19.9601 10 20.2401 10 20.454 9.89101C20.6422 9.79513 20.7951 9.64215 20.891 9.45399C21 9.24008 21 8.96005 21 8.4V5.6C21 5.03995 21 4.75992 20.891 4.54601C20.7951 4.35785 20.6422 4.20487 20.454 4.10899C20.2401 4 19.9601 4 19.4 4H4.6C4.03995 4 3.75992 4 3.54601 4.10899C3.35785 4.20487 3.20487 4.35785 3.10899 4.54601C3 4.75992 3 5.03995 3 5.6V8.4C3 8.96005 3 9.24008 3.10899 9.45399C3.20487 9.64215 3.35785 9.79513 3.54601 9.89101C3.75992 10 4.03995 10 4.6 10ZM5 10H19V16.8C19 17.9201 19 18.4802 18.782 18.908C18.5903 19.2843 18.2843 19.5903 17.908 19.782C17.4802 20 16.9201 20 15.8 20H8.2C7.07989 20 6.51984 20 6.09202 19.782C5.71569 19.5903 5.40973 19.2843 5.21799 18.908C5 18.4802 5 17.9201 5 16.8V10Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        <span> Product</span>
      </NavLink>
    </li> 
    <li>
      <NavLink to={'/controlPage/Orders'}>
      <svg width="100px" height="100px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(45)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12.0004 18.5816V12.5M12.7976 18.754L15.8103 19.7625C17.4511 20.3118 18.2714 20.5864 18.7773 20.3893C19.2166 20.2182 19.5499 19.8505 19.6771 19.3965C19.8236 18.8737 19.4699 18.0843 18.7624 16.5053L14.2198 6.36709C13.5279 4.82299 13.182 4.05094 12.7001 3.81172C12.2814 3.60388 11.7898 3.60309 11.3705 3.80958C10.8878 4.04726 10.5394 4.8182 9.84259 6.36006L5.25633 16.5082C4.54325 18.086 4.18671 18.875 4.33169 19.3983C4.4576 19.8528 4.78992 20.2216 5.22888 20.394C5.73435 20.5926 6.55603 20.3198 8.19939 19.7744L11.2797 18.752C11.5614 18.6585 11.7023 18.6117 11.8464 18.5933C11.9742 18.5769 12.1036 18.5771 12.2314 18.5938C12.3754 18.6126 12.5162 18.6597 12.7976 18.754Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>     
      <span> Orders</span>
       </NavLink>
    </li>
    <li>
      <NavLink to={'/controlPage/Admins'}>
      <svg fill="#000000" width="100px" height="100px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M16 15.503A5.041 5.041 0 1 0 16 5.42a5.041 5.041 0 0 0 0 10.083zm0 2.215c-6.703 0-11 3.699-11 5.5v3.363h22v-3.363c0-2.178-4.068-5.5-11-5.5z"></path></g></svg>
        <span> Admins</span>
      </NavLink>
    </li>
    <li>
    <NavLink to={'/controlPage/FetureProduct'}>
      <svg fill="#000000" width="100px" height="100px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>cog1</title> <path d="M26.573 14.5h1.927v3h-1.927c-0.131 0.956-0.374 1.876-0.734 2.737l1.669 0.964-1.5 2.598-1.698-0.98c-0.583 0.736-1.26 1.392-2.011 1.958l1 1.731-2.598 1.5-1.021-1.767c-0.849 0.331-1.745 0.562-2.681 0.673v2.086h-3v-2.143c-0.912-0.141-1.791-0.381-2.614-0.731l-1.087 1.882-2.598-1.5 1.113-1.928c-0.697-0.559-1.319-1.203-1.862-1.913l-1.961 1.132-1.5-2.598 1.979-1.143c-0.321-0.811-0.546-1.668-0.668-2.559h-2.301v-3h2.302c0.122-0.892 0.347-1.749 0.668-2.559l-1.979-1.143 1.5-2.598 1.961 1.132c0.543-0.71 1.165-1.354 1.862-1.914l-1.113-1.925 2.598-1.5 1.087 1.882c0.823-0.35 1.702-0.591 2.614-0.731v-2.143h3v2.085c0.936 0.111 1.832 0.342 2.681 0.673l1.021-1.767 2.598 1.5-1 1.732c0.751 0.566 1.428 1.222 2.011 1.958l1.698-0.98 1.5 2.598-1.669 0.964c0.359 0.861 0.602 1.781 0.733 2.737zM15.491 9.491c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5 6.5-2.91 6.5-6.5-2.91-6.5-6.5-6.5zM15.5 18.5c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5z"></path> </g></svg>
        <span> Settings</span>
      </NavLink>
    </li>
    <li onClick={logOutHandler}>
      <NavLink  >
      <svg fill="#000000" width="100px" height="100px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" transform="matrix(-1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M1.3 3.75h5.88V2.5H1.3A1.25 1.25 0 0 0 .05 3.75v8.5A1.25 1.25 0 0 0 1.3 13.5h5.88v-1.25H1.3z"></path><path d="m15.4 7-4-2.74-.71 1 3.08 2.1H4.71v1.26h9.07l-3.08 2.11.71 1L15.4 9a1.24 1.24 0 0 0 0-2z"></path></g></svg>
        <span> Log Out</span>
      </NavLink>
    </li>
  
  </ul>
</nav>
<Outlet/>
</div>
)
}
export default AdminPageNav;
// <Outlet/>

