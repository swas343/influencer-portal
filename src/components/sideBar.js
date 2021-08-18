// import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import classes from './sidebar.module.css';

const SideBar = () =>{
    return (
        <div className={`d-none d-sm-block ${classes.sidebar}`}>
            <ul className="pt-3">
                <li className="activeLink">Instagram</li>
                <li>Youtube</li>
            </ul>
        </div>
    )
}

export default SideBar;