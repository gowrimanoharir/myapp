import styled from 'styled-components'

export const AboutContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100vh;
    align-items: center;
    justify-content: center;
    padding: 100px 200px;
    background: #4a51bd;
    overflow-y: hidden;

    @media screen and (max-width: 800px) {
        padding: 30px 75px;
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 600px) {
        padding: 0 20px;
        grid-template-columns: 1fr;
    }
`

export const AboutColumn = styled.div`
    display: flex;
    flex-direction: column;
    background: #4a51bd;

    @media screen and (max-width: 800px) {
        align-items: center;
        justify-content: center;
    }
`

export const AboutH1 = styled.h1`
    display: flex;
    font-size: 30px;
    font-weight: 900;
    color: #fff;
    letter-spacing: 4px;
    padding-top: 0;

    @media screen and (max-width: 800px) {
       padding-right: 77px;
       font-size: 25px;
    }

    @media screen and (max-width: 600px) {
        letter-spacing: 2px;
        padding: 0;
        width: 100%;
        text-align: left;
    }
`

export const AboutText = styled.p`
    display: flex;
    font-size: 17px;
    font-weight: 500;
    color: #fff;

    @media screen and (max-width: 800px) {
        //padding: 0 20px 0 20px;
    }

    @media screen and (max-width: 600px){
        padding: 0;
    }
`
export const AboutImg1 = styled.img`
    display: block;
    width: 25vw;
    margin: 0 0 0 250px;

    @media screen and (max-width: 800px) {
        width: 30vw;
        margin: 0 0 0 100px;
    }

    @media screen and (max-width: 600px) {
        display: block;
        width: 80vw;
        margin: 0;
    }
`

export const AboutImg2 = styled.img`
    display: block;
    width: 23vw;
    margin: 0 250px 0 0;

    @media screen and (max-width: 800px) {
        margin: 0;
        width: 33vw;
    }

    @media screen and (max-width: 600px) {
        // width: 80vw;
        // margin: 0;
        display: none;
    }
`

export const AboutImg3 = styled.img`
    display: block;
    width: 25vw;
    margin: 20px 0 0 250px;

    @media screen and (max-width: 800px) {
        margin: 20px 0 0 150px;
        width: 27vw;
    }
    @media screen and (max-width: 600px) {
        // width: 50vw;
        // margin: 20px auto 0 auto;
        display: none;
    }
`