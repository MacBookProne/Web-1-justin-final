import React from 'react';
import styled from 'styled-components';


import { clientData } from 'UI/common/data/clientData.js';

import ClientMember from './ClientMember.jsx';

const clientList = () => {
    return (

        <ClientListStyled className='ClientList'>
            <div className="wrapper">
            {
                clientData.map((member, idx) => {
                    return <ClientMember key={idx} member={ member } />
                })
            }
            </div>
        </ClientListStyled>
    );
}

export default clientList;

const ClientListStyled = styled.div`

    background-color: #AAA7A6;
        padding: 20px;
        margin: 20px 0px;

    .wrapper {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;

`;