import React from 'react'
import {ContactContainer, ContactForm, ContactH1, ContactFormLabel, ContactFormInput, ContactFormInputTextArea, ContactFormButton} from './ContactElements'

const ContactSection = () => {
    return (
        <>
           <ContactContainer id="/contact">
                <ContactForm action="#">
                    <ContactH1>Got any questions? Send us a message!</ContactH1>
                    <ContactFormLabel htmlFor='for'>Full name</ContactFormLabel>
                    <ContactFormInput placeholder="Full name" type="text" required/>
                    <ContactFormLabel htmlFor='for'>Email</ContactFormLabel>
                    <ContactFormInput placeholder="Email" type="email" required/>
                    <ContactFormLabel htmlFor='for'></ContactFormLabel>
                    <ContactFormInputTextArea placeholder="Add your message here" type="textarea" maxLength="400" rows={7} required/>
                    <ContactFormButton type='submit' to="/thankyou">Submit</ContactFormButton>
                </ContactForm>
            </ContactContainer> 
        </>
    )
}

export default ContactSection
