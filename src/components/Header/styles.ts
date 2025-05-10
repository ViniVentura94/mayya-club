
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { breakpoints } from '../../styles/breakpoints';


export const Container = styled.header`
    width: 100%;
    padding: 20px 40px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    //border-bottom: 1px solid #eee;

    @media (max-width: ${breakpoints.mobile}) {
        flexx-direction: column;
        gap: 1rem;
    }
`

export const Logo = styled(Link)`
    font-size: 1.5rem;
    font-weight: bold;
    color: #000;
    text-shadow: 2px 2px 10px rgb(236, 164, 199);
    cursor: pointer;
    transition: color 0.5s ease-in-out;

    &:hover {
        scale: 1.05;
        color: #FF71B5;
        transition: 0.7s ease-in-out;
    }

`

export const Nav = styled.nav`
    display: flex;
    gap: 2rem;

    @media (max-width: ${breakpoints.mobile}) {
        justify-content: center;
        gap: 1rem;
    }
`

export const NavLink = styled(Link)`
    font-size: 1rem;
    color: #000;
    position: relative;
    transition: color 0.2s ease-in-out;

&:hover {
    color: #FF71B5;
}

&::after {
    content: '';
    position: absolute;
    height: 2px;
    background: #FF71B5;
    left: 0;
    bottom: -4px;
    width: 0%;
    transition: width 0.3s ease-in-out;
}

    &:hover::after {
        width: 100%;
}

`

export const ScrollNavLink = styled(ScrollLink)`
    font-size: 1rem;
    color: #000;
    position: relative;
    transition: color 0.2s ease-in-out;
    cursor: pointer;
    text-decoration: none;

    &:hover {
        color: #FF71B5;
    }

    &::after {
        content: '';
        position: absolute;
        height: 2px;
        background: #FF71B5;
        left: 0;
        bottom: -4px;
        width: 0%;
        transition: width 0.3s ease-in-out;
    }

    &:hover::after {
        width: 100%;
    }
`

export const NavButton = styled.button`
    font-size: 1rem;
    background: none;
    border: none;
    color: #000;
    cursor: pointer;
    position: relative;
    transition: color 0.2s ease-in-out;

    &:hover {
        color: #FF71B5;
    }

    &::after {
        content: '';
        position: absolute;
        height: 2px;
        background: #FF71B5;
        left: 0;
        bottom: -4px;
        width: 0%;
        transition: width 0.3s ease-in-out;
    }

    &:hover::after {
        width: 100%;
    }

`
