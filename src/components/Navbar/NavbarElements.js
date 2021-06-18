import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
    background: #4a51bd;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 900;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1170px;
`;

export const NavLogo = styled(LinkS)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.8rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;

    &:hover {
        color: #ff9666;
    }

    @media screen and (max-width: 800px) {
        font-size: 1.5rem;
    }
`

export const MobileIcon = styled.div`
    display: none;
    color: #fff;

    @media screen and (max-width: 760px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;
    width: 400px; 
    justify-content: space-between;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavItem = styled.li`
    height: 63px;
`

export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.1rem;
    height: 100%;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;

    &:hover, &:active {
        border-bottom: 5px solid #ff9666;
    }
`

export const NavBtn = styled.div`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #ff9666;
    white-space: nowrap;
    padding: 10px 22px;
    color: #4a51bd;
    font-size: 20px;
    font-weight: 700;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
    }
`