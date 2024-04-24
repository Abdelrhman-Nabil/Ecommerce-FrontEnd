import { useState } from 'react'
import { Fragment } from 'react'
import { Link, Outlet } from 'react-router-dom'
import SearchIcon from '../../component/icons/searech-icon/searchIcon'
import NavLinks from '../../component/navigation/nav-links/nav-links'
import BackDrop from '../../component/others/backDrop/backDrop'
import SideDrawer from '../../component/navigation/sideDrop/sideDrop'
import './navigation.css'
const Navigation=()=>{
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };
  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };
return(
  <Fragment>
      {drawerIsOpen && <BackDrop  onClick={closeDrawerHandler} />}
      {drawerIsOpen && (<SideDrawer onClick={closeDrawerHandler} />)}
  <div className='navigation'>
  <button className="main-navigation-menu-btn" onClick={openDrawerHandler}>
          <span />
          <span />
          <span />
        </button>
   <div className='nav-title'>
    <Link to='/'>Ecommerce</Link>
   </div>
   <div className='main-Nav'>
    <NavLinks/>
   </div>
   <div className='searchIcon'>
   <Link className='seacrch-icon' to={'/SearchPage'}><SearchIcon/></Link>

   </div>
  </div>
  <Outlet/>
  </Fragment>
)
}

export default Navigation