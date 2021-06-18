import styled from 'styled-components';

export const HeroContainer = styled.div`
    background: #4a51bd;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    overflow-y: hidden;
    padding: 0 0 30px 0;

    @media screen and (max-width: 600px) {
        flex-direction: column;
        overflow-x: hidden;
        padding: 0;
    }
`

export const HeroColumn= styled.div`
    display: flex;
`

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 30px;
    font-weight: 900;
    text-align: right;
    margin: 0 200px 0 200px;
    letter-spacing: 4px;

    @media screen and (max-width: 800px) {
        font-size: 27px;
        margin: 0 100px 0 0;
    }

    @media screen and (max-width: 600px) {
        margin: 0;
        font-size: 20px;
        padding-top: 15px;
        letter-spacing: 2px;
        text-align: center;
    }
`

export const HeroImg = styled.img`
    display: block;
    width: 100%;
    margin: 0 0 0 200px;

    @media screen and (max-width: 800px) {
        margin: 0 30px 0 70px;
    }

    @media screen and (max-width: 600px) {
        margin: 0 0 0 15px;
    }
`