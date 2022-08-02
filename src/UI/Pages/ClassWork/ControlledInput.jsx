import React, { useState } from 'react';
import styled from 'styled-components';

const ControlledInput = () => {

    const [inputValue, inputValueUpdate] = useState('');
    {/*Captures event ---------------------------*/}
    const onChange =(e) => {
        console.log('e.target.value', e.target.value);
        inputValueUpdate(e.target.value);
    }
    return (
        <ControlledInputStyled className='ControlledInput'>
            <h2>ControlledInput</h2>

            {/*Creates an input area ---------------------------*/}
            <input
                type='text'
                placeholder='Controlled Input'
                onChange={ onChange }
                value={ inputValue }
            />

            <h4><b>User Typed:</b> {inputValue} </h4>
        </ControlledInputStyled>
    );
}

export default ControlledInput;

const ControlledInputStyled = styled.div`
    input {
        font-size: 30px;
        padding: 20px;
        display: block;
        width: 100%;
    }
    h4 {
        font-size: 20px;
        margin: 20px 0px;
    }

`;