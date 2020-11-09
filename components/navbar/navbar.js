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
                    <NavLink to='/about' active Style>
                        About
                    </NavLink>
                    <NavLink to='/portfolio' active Style>
                        Portfolio
                    </NavLink>
                    <NavLink to='/blog' active Style>
                        Blog
                    </NavLink>
                    <NavLink to='/contact' active Style>
                        Contact
                    </NavLink>
                </NavMenu>  
            </Nav>
        </>
    );
};

export default Navbar;