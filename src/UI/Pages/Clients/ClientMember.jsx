import React from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { defaultMediaQueries } from 'UI/common/useMediaQuery.js';

/* Components ---------------------------*/
import Lightbox, { ActiveArea, Modal } from 'UI/common/Lightbox/Lightbox.jsx';
import AccoladesList from './Accolades/AccoladesList.jsx';

const ClientMember = ({member}) => {

    return (
        <ClientMemberStyled className='ClientMember'>
            <Lightbox
                title={ member.name }
                displayName='Client Lightbox'
            >
                <ActiveArea>
                    <img src={ member.image } alt={ member.name } />
                    <h3>{ member.name }</h3>
                </ActiveArea>

                <Modal>
                    <img src={ member.image } alt={ member.name } />
                    <p><b>Website:</b> { member.website }</p>


                    <AccoladesList accolades={ member.accolades } />
                </Modal>

            </Lightbox>
        </ClientMemberStyled>
    );
}

export default ClientMember;

const ClientMemberStyled = styled.div`
    width: 100%;
    margin: 5px 0px;
    @media ${defaultMediaQueries.smUp} {
        width: 45%;
        margin: 5px;
    }
    @media ${defaultMediaQueries.mdUp} {
        width: 30%;
        margin: 15px;
    }
    @media ${defaultMediaQueries.lgUp} {
        width: 20%;
        margin: 20px;
    }
    img {
        width: 100%;
        display: block;
        min-height: 150px;
    }
    h3 {
        color: white;
        background-color: #071e22ff;
        margin: 0px;
        padding: 5px 10px;
    }
`;