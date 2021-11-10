import React from 'react'
import styled, { css } from 'styled-components/macro';
import { Link } from 'react-router-dom';
import {menuData} from '../data/MenuData';
import { Button } from './Button';
// import Bars from '../images/bars.jpg'
import { FaBars } from 'react-icons/fa';

const Nav = styled.nav`
    height: 60px;
 
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index: 100;
    position: fixed;
    width: 100%;
   
`;

const NavLink = css`
color: #fff;
display: flex;
align-items: center;
padding: 0 1rem;
height: 100%;
cursor: pointer;
text-decoration: none;
`;

const Logo = styled(Link)`
    ${NavLink}
    font-style: italic;
`;

const MenuBars = styled(FaBars)`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        background-size: contain;
        height: 30px;
        width: 30px;
        cursor: pointer;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-50%, 50%)
        
    }
`;

const NavMenu = styled.div`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const NavMenuLink = styled(Link)`
    ${NavLink}
    
`;
const NavButn = styled.div`
    display: flex;
    align-items: center;
    
    @media screen and (max-width: 768px) {
        display: none;
    }
  
`;

const Navbar = ({ toggle }) => {
    return (
        <Nav>
            <Logo to='/'>ELIXR</Logo>
            <MenuBars onClick={toggle} />
            <NavMenu>
            {menuData.map((item, index) => (
                <NavMenuLink to={item.link} key={index}>
                    
                        {item.title}
                   
                </NavMenuLink>
            ))}
            </NavMenu>
            <NavButn>
            <Button primary='true' to='/contact'>Contact Us</Button>
            </NavButn>
        </Nav>
    )
}

export default Navbar
