import React from 'react';
import { Nav, NavLink, Bars, NavMenu } from './navbarelement.js';
import { FaBars } from 'react-icons/fa';
import GS from './gs.png';


const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to = '/'>
                    <img src = {GS} alt = "logo" width = "130px" height = "50px"/>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to='/about' activeStyle>
                        About
                    </NavLink>
                    <NavLink to='/portfolio' activeStyle>
                        Portfolio
                    </NavLink>
                    <NavLink to='/blog' activeStyle>
                        Blog
                    </NavLink>
                    <NavLink to='/contact' activeStyle>
                        Contact
                    </NavLink>
                </NavMenu>  
            </Nav>
        </>
    );
};

export default Navbar;