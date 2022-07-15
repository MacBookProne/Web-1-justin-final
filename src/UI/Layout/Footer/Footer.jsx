import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <FooterStyled className='Footer'>
            Footer
        </FooterStyled>
    );
}

export default Footer;

const FooterStyled = styled.div`
    background-color: #014444;
    color: white;

    padding: 20px;
    margin: 50px 0 px 0px;
`;