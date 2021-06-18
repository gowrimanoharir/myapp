import React from 'react'
import Home from '../../images/home.svg'
import {HeroContainer, HeroColumn,  HeroH1, HeroImg} from './HeroElements'

const HeroSection = () => {
    return (
        <>
           <HeroContainer id="home">
                <HeroColumn>
                    <HeroImg src={Home}/>
                </HeroColumn>
                <HeroColumn>
                    <HeroH1>turn 2D ideas into 3D solutions</HeroH1>
                </HeroColumn>
            </HeroContainer>
        </>
    )
}

export default HeroSection;
