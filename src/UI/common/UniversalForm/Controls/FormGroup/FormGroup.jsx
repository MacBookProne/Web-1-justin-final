import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';

/* Components ---------------------------*/
import Label from './Label.jsx';
import Control from './Control.jsx';

const FormGroup = ({children, thisField, id, label}) => {

    const theClassName = classNames({
        'FormGroup': true,
        'error': thisField && !thisField.isValid
    });

    return (
        <FormGroupStyled className={ theClassName }>
            <Label id={ id } label={ label }/>
            <Control id ={ id }>
                { children }
            </Control>
        </FormGroupStyled>
    );
}

export default FormGroup;

const FormGroupStyled = styled.div`
    margin-bottom: 20px;
    &.error {
        input, textarea {
            border: solid 2px red;
        }
    }
`;