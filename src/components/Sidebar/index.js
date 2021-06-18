import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <>
            <SidebarContainer isOpen={isOpen} onClick={toggle}>
                <Icon onClick={toggle}>
                    <CloseIcon />
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink to="about">about</SidebarLink>
                        <SidebarLink to="projects">projects</SidebarLink>
                        <SidebarLink to="services">services</SidebarLink>
                        <SidebarLink to="team">team</SidebarLink>
                    </SidebarMenu>
                    <SideBtnWrap>
                        <SidebarRoute to="/contact">contact</SidebarRoute>
                    </SideBtnWrap>
                </SidebarWrapper>
            </SidebarContainer>   
        </>
    )
}

export default Sidebar
