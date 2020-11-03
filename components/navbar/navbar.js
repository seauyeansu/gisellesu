import React from 'react';
import { Nav, NavLink, Bars, NavMenu } from './navbarelement.js';
import GS from './gs.png';


const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to = '/'>
                    <img src = {GS} width = "70px" height = "70px"/>
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