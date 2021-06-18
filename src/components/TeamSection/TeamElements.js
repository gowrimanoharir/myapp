import styled from 'styled-components'

export const TeamContainer = styled.div`
    max-width:100%;
    display: grid;
    grid-template-columns: 1.45fr 1fr 1fr;
    grid-column-gap: 20px;
    padding: 100px 200px;

    @media screen and (max-width: 800px) {
        padding: 30px 75px;
        grid-template-columns: 1fr;
    }

    @media screen and (max-width: 600px) {
        padding: 0 20px;
        grid-template-columns: 1fr;
    }
`

export const TeamColumn = styled.div`
    display: flex;
    flex-direction: column;
    
    @media screen and (max-width: 800px) {
        margin: 20px 0;
        height: auto;
        overflow-y: hidden;
    }
`
export const TeamRow = styled.div`
    display: flex;
    flex-direction: column;
`
export const TeamH1 = styled.h1`
    display: flex;
    font-size: 30px;
    font-weight: 900;
    color: #4a51bd;
    letter-spacing: 4px;

    @media screen and (max-width: 800px) {
        font-size: 25px;
    }

    @media screen and (max-width: 600px) {
        letter-spacing: 2px;
    }
`
export const TeamH2 = styled.h2`
    display: flex;
    font-size: 17px;
    font-weight: 700;
    color: #000;
    
    @media screen and (max-width: 800px) {
        font-size: 17px;
    }
`
export const TeamP = styled.p`
    display: flex;
    font-size: 17px;
    font-weight: 400;
    color: #000;

    @media screen and (max-width: 800px) {
        font-size: 17px;
    }
`
export const TeamImg = styled.img`
    display: flex;
    width: 100%;

    &:hover, &:active {
        -webkit-filter:brightness(50%);
        -moz-filter:brightness(50%);
        filter: url(#brightness);
        filter:brightness(50%);
    }
`