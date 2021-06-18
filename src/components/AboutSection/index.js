import React from 'react'
import PWA from '../../images/pwa.svg'
import Freelancer from '../../images/freelancer.svg'
import Business from '../../images/business.svg'
import {AboutContainer, AboutColumn, AboutH1, AboutText, AboutImg1, AboutImg2, AboutImg3} from './AboutElements'

const AboutSection = () => {
    return (
        <>
            <AboutContainer id="about">
                <AboutColumn>
                    <AboutImg1 src={Freelancer} alt="freelancer"/>
                    <AboutImg2 src={PWA} alt="software"/>
                    <AboutImg3 src={Business} alt="business"/>
                </AboutColumn>
                <AboutColumn>
                    <AboutH1>what we do</AboutH1>
                    <AboutText>With Petite Homme, we encourage our clients to dream big. We provide a myriad of solutions within the following disciplines: Human Resources, Marketing (Digital, Social, Print), & Full Stack Web and Mobile Development (iOS, Android).</AboutText>
                </AboutColumn>
            </AboutContainer>  
        </>
    )
}

export default AboutSection
