import React from 'react'
import {FooterContainer, FooterContent, FooterRights} from './FooterElements'

const FooterSection = () => {
    return (
        <>
            <FooterContainer>
                <FooterContent> Toronto, Ontario, Canada | Email: admin@petitehomme.com</FooterContent>
                <FooterRights>Petite Homme © {new Date().getFullYear()} All rights reserved</FooterRights>
            </FooterContainer>  
        </>
    )
}

export default FooterSection
