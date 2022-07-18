import React from 'react';
import styled from 'styled-components';

import MainMenu from '../MainMenu.jsx';

const MediumLargeView = () => {
    return (
        <MediumLargeViewStyled className='MediumLargeView'>
            <h2>MediumLargeView</h2>
            <MainMenu />
        </MediumLargeViewStyled>
    );
}

export default MediumLargeView;

const MediumLargeViewStyled = styled.div`

`;