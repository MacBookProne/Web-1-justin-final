// importing dependcies
import React from 'react';
import styled from 'styled-components';
import UI from 'UI/UI.jsx';


// this is my componet function
const Swap = () => {
    return (
        <SwapStyled>
            <img src='/assets/img/swapper/sunAndMoon/moon.png' />
        </SwapStyled>
    )
}
// exporting my componet
export default Swap;

const SwapStyled = styled.div`
    border solid 15px purple;
`;