import React from 'react';
import styled from 'styled-components';

import UniversalForm, { Input, Textarea, SubmitButton } from 'UI/common/UniversalForm/UniversalForm.jsx';

const Forms = () => {

    const onSubmit = () => {
        console.log('Classwork Form has been submitted.');
    }

    return (
        <FormsStyled className='Forms'>
            <h2>Forms</h2>

            <UniversalForm
                displayName='UF: Classwork Form'
                onSubmit={ onSubmit }
            >
                <Input
                    label='Name'
                    id='username'
                    type='text'
                    placeholder='Full Name'
                    defaultValue='Justin ODea'
                    rules={ ['required'] }
                />
                <Textarea
                    label='Tell us about yourself'
                    id='about'
                    type='text'
                    placeholder='All about you...'
                    defaultValue='This is what a bio might look like.'
                    rules={ ['required'] }
                />
                <SubmitButton>Submit The Form</SubmitButton>
            </UniversalForm>

        </FormsStyled>
    );
}

export default Forms;

const FormsStyled = styled.div`
`;