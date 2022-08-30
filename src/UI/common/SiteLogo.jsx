import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SiteLogo = () => {
    return (
        <SiteLogoStyled className='SiteLogo'>
            <Link to='/'>
            <img src='/assets/img/big-creek-agency.png' alt='Big-Creek-Agency' />
            </Link>
        </SiteLogoStyled>
    );
}

export default SiteLogo;

const SiteLogoStyled = styled.div`
    color: #13bbbb;
    width: 100%;
    height: 100%;

    img {
        width: 100%;
        height: auto;
    }
`;