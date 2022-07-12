import React from 'react';
import styled from 'styled-components';

import SwapList from './Swapper/SwapList.jsx';
import HomeWork from './HomeWork/HomeWork.jsx';

const ClassWork = () => {
    return (
        <ClassWorkStyled className='ClassWork'>

           <h1>ClassWork</h1>
           <SwapList />
           <HomeWork />

        </ClassWorkStyled>
    );
}

export default ClassWork;

const ClassWorkStyled = styled.div`

`;