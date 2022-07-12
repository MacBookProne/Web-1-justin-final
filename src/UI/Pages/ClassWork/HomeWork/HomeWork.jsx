import React from 'react';
import styled from 'styled-components';
import Essays from './Essays/Essays.jsx';
const HomeWork = () => {
    return (
        <HomeWorkStyled className='HomeWork'>
            <h2>HomeWork</h2>

            <Essays />
        </HomeWorkStyled>
    );
}

export default HomeWork;

const HomeWorkStyled = styled.div`

`;