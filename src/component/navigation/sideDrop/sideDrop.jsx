import NavLinks from '../nav-links/nav-links'
import './sideDrop.css'
const SideDrawer = props => {
    return (
        <aside className='side-drawer' onClick={props.onClick}>
            <div className='side-drawer-item' >
            <NavLinks />
          </div>
        </aside>
    )
}

export default SideDrawer