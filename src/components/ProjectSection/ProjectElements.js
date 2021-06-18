import styled from 'styled-components'

export const ProjectContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    align-items: center;
    padding: 150px 270px 100px 270px;
    background: #fff;
    overflow-x: hidden;

    ::-webkit-scrollbar {
        display: none;
    }

    @media screen and (max-width: 800px) {
        padding: 30px 75px;
    }

    @media screen and (max-width: 600px) {
        padding: 0 20px;
    }
`
export const ProjectH1 = styled.h1`
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