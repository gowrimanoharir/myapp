import styled from 'styled-components'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'

export const ServicesContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    align-items: center;
    padding: 150px 270px 100px 270px;
    background: #fff;

    @media screen and (max-width: 800px) {
        padding: 30px 75px;
    }

    @media screen and (max-width: 600px) {
        padding: 0 0 200px 0;
    }
`
export const ServicesH1 = styled.h1`
    display: flex;
    font-size: 30px;
    font-weight: 900;
    color: #4a51bd;
    letter-spacing: 4px;
    margin-top: 30px;

    @media screen and (max-width: 800px) {
        font-size: 25px;
    }

    @media screen and (max-width: 600px) {
        letter-spacing: 2px;
    }
`

export const ServicesCount = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 0 10px;
`

export const ServicesRow = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 30px;
    overflow-y: auto;
    align-items: center;

    ::-webkit-scrollbar {
        display: none;
    }

    @media screen and (max-width: 600px) {
        display: none;
    }
`

export const ServicesSlideRow = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 64.5vw;
    overflow-x: scroll;

    ::-webkit-scrollbar {
        display: none;
    }
`

export const ServicesSlide = styled.div`
    display: flex;
    background: #4a51bd;
    color: #fff;
    width: 20vw;
    height: 20vw;
    align-items: center;
    justify-content: center;
    border-radius: 20px;

    @media screen and (max-width: 1030px) {
        width: 19.5vw;
        height: 19.5vw;
    }

    @media screen and (max-width: 800px) {
        width: 19vw;
        height: 19vw;
    }
`

export const ServicesImg = styled.img`
    display: block;
    z-index: 50;
    width: 17vw;
    height: 17vw;

    &:hover, &:active { 
        display: none;
    }
`

export const ServicesText = styled.h2`
    font-weight: 700;
    font-size: 30px;
    color: #fff;
    text-align: center;
    padding: 0 2vw;
`

export const ServicesRightArrow = styled(FaArrowAltCircleRight)`
    font-size: 50px;
    color: #4a51bd;
    z-index: 10;
    cursor: pointer;
    user-select: none;
`

export const ServicesLeftArrow = styled(FaArrowAltCircleLeft)`
    font-size: 50px;
    color: #4a51bd;
    z-index: 10;
    cursor: pointer;
    user-select: none;
`

export const ServicesMobileListView =  styled.div`
    display: none;

    @media screen and (max-width: 600px) {
        max-width: 100vw;
        text-align: left;
        display: flex;
        flex-direction: column;
    }
`

export const ServicesMobileText = styled.span`
    display: block;
    padding: 10px 10px;
    color: #fff;
    font-weight: 500;
    border: 1px solid #fff;
    border-radius: 5px;
    background: #4a51bd;
`