import React from 'react';
import styled from 'styled-components';


/* Importing Universal form  ---------------------------*/

import UniversalForm, { Input, Textarea, SubmitButton } from 'UI/common/UniversalForm/UniversalForm.jsx';

const Contact = () => {

    const onSubmit = ({fields, payload}) => {
        console.group('Contact Form');
            console.log('fields', fields);
            console.log('payload', payload);
        console.groupEnd();
    }
    return (
        <ContactStyled className='Contact inset'>
            <h1>Contact</h1>
            <UniversalForm
                displayName='UF: Contact Form'
                onSubmit={ onSubmit }
            >
                <Input
                    label='First Name'
                    id='first'
                    type='text'
                    placeholder='First Name'
                    defaultValue=''
                    rules={ [ 'required' ] }
                />
                <Input
                    label='LastName'
                    id='last'
                    type='text'
                    placeholder='Last Name'
                    defaultValue=''
                    rules={ [ 'required' ] }
                />
                <Input
                    label='Email'
                    id='email'
                    type='email'
                    placeholder='Email'
                    defaultValue=''
                    rules={ [ 'required', 'email' ] }
                />
                <Textarea
                    label='Inquiries?'
                    id='about'
                    placeholder='Question, Comment, or Friendly Inquiry?'
                    defaultValue=''
                    rules={ [ 'required' ] }
                />
                <SubmitButton>Contact Us</SubmitButton>
            </UniversalForm>
        </ContactStyled>
    );
}

export default Contact;

const ContactStyled = styled.div`

`;