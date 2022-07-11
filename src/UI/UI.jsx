import React from 'react';
import styled from 'styled-components';
// importing swap
import SwapList from './Swapper/SwapList.jsx';
const UI = () => {



    return (
        <UIStyled className='UI'>
            <h1>Final Project</h1>
            <div className="student-name">
                Justin O'Dea
            </div>

            <SwapList />
        </UIStyled>

    );
}

export default UI;

const UIStyled = styled.div`
    background-color: teal;
    margin: 100px auto;
    padding: 100px;
    max-width: 500px;
    text-align: center;

    .student-name {
        color: white;
        font-size: 30px;
    }
`;