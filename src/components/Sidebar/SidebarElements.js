import styled from 'styled-components';
import {Link as LinkS} from 'react-scroll';
import {Link as LinkR} from 'react-router-dom';
import { FaTimes} from 'react-icons/fa';

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #4a51bd;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '100%': '0')};
    top: ${({ isOpen }) => (isOpen ? '0': '-100%')};
`
export const CloseIcon = styled(FaTimes)`
    color: #fff;
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

export const SidebarWrapper = styled.div`
    color: #fff;
`

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns; 1 fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 60px);
    }
`

export const SidebarLink  = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 3%;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transitionn: 0.2s ease-in-out;
    text-decoration: none;
    color: #fff;
    cursor: pointer;

    @media screen and (max-width: 768px) {
        padding-right: 5%;
    }

    @media screen and (max-width: 540px) {
        padding-right: 10%;
    }
    
    &:hover {
        color: #ff6999;
        transition: 0.2s ease-in-out;
    }
`

export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`

export const SidebarRoute =styled(LinkR)`
    border-radius: 50px;
    background: #ff9666;
    white-space: nowrap;
    padding: 16px 64px;
    color: #4a51bd;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    font-size: 1.4rem;
    font-weight: 700;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #ff9666;
    }
`