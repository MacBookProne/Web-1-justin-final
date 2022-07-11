// importing dependcies
import React, { useState } from 'react';
import styled from 'styled-components';
import UI from 'UI/UI.jsx';


// this is my componet function
const Swap = () => {

    const [imgSrc, imgSrcUpdate] = useState('/assets/img/swapper/sunAndMoon/moon.png');

    const changeToImage1 = () => {
        console.log('Change to Image 1');
        imgSrcUpdate('/assets/img/swapper/sunAndMoon/moon.png');
    }

    const changeToImage2 = () => {
        console.log('Change to Image 2');
        imgSrcUpdate('/assets/img/swapper/sunAndMoon/sun.png');

    }


    return (
        <SwapStyled>
            <h3>Sun and Moon</h3>
            <div>
                <img src= { imgSrc }
                alt='The Moon'
                onMouseOver={ changeToImage1 }
                onMouseOut={ changeToImage2 }
                />
                <h4>The Moon</h4>
            </div>
        </SwapStyled>
    )
}

// exporting my componet
export default Swap;

const SwapStyled = styled.div`
    background-color: powderblue;
    padding 20px;

    h3 {
        font-size: 40px;
        color: teal;
    }
    h4 {
        font-size: 18px;
        color: teal;
    }
    img {
        border: solid 10px teal;

    }
`;