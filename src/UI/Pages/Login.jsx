import React from 'react';
import styled from 'styled-components';


import UniversalForm, { Input, SubmitButton } from 'UI/common/UniversalForm/UniversalForm.jsx';

const Login = () => {
    const onSubmit = ({fields, payload}) => {
        console.group('Login Forms');
            console.log('fields', fields);
            console.log('payload', payload);
        console.groupEnd();
    }
    return (
        <LoginStyled className='Login inset'>
            <h1>Login</h1>
            <UniversalForm
                displayName='UF: Login Form'
                onSubmit={ onSubmit }
            >
                <Input
                    label='Email'
                    id='first'
                    type='text'
                    placeholder='Email'
                    defaultValue=''
                    rules={ [ 'required', 'email' ] }
                />
                <Input
                    label='Password'
                    id='last'
                    type='text'
                    placeholder='Password'
                    defaultValue=''
                    rules={ [ 'required' ] }
                />
                <SubmitButton>Login</SubmitButton>
            </UniversalForm>
        </LoginStyled>
    );
}

export default Login;

const LoginStyled = styled.div`

`;