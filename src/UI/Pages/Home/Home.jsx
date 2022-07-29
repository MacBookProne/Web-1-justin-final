import React from 'react';
import styled from 'styled-components';


// Components-----------------------

import Slideshow from './Slideshow/Slideshow';
import Tabbed from './Tabbed/Tabbed';
const Home = () => {
    return (
        <HomeStyled className='Home Inset'>
            <h1>Home</h1>
            <Slideshow />
            <Tabbed />
        </HomeStyled>
    );
}

export default Home;

const HomeStyled = styled.div`
h1 { display: None }
`;