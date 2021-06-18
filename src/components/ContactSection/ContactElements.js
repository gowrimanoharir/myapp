import styled from 'styled-components'
import {Link} from 'react-router-dom';

export const ContactContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    background: #fafafa;
    align-items: center;
    justify-content: center;
`

export const ContactForm = styled.form`
    background: #4a51bd;
    max-width: 350px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 50px 32px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

    @media screen and (max-width: 600px) {
        padding: 32px 32px;
    }
`

export const ContactH1 = styled.h1`
    display: block;
    color: #fff;
    font-size: 1.1rem;
    font-weight: 500;
    text-align: center;
    margin-bottom: 40px;
`;

export const ContactFormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: #fff;
    display: none;
`;

export const ContactFormInput = styled.input`
    padding: 16px 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
`;

export const ContactFormInputTextArea = styled.textarea`
    padding: 16px 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
    overflow: hidden;
`;

export const ContactFormButton = styled(Link)`
    background: #ff9666;
    padding: 16px 0;
    border: none;
    border-radius: 4px;
    color: #4a51bd;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    text-decoration: none;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
    }
`;