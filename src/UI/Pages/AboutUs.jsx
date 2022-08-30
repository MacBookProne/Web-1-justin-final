import React from 'react';
import styled from 'styled-components';
const AboutUs = () => {
    return (
        <AboutUsStyled className='AboutUs inset'>
            <div className="wrapper">
                    <h1>About Us</h1>
                    <p>Determined and ambitious Web Developer eager to prove my value and talent. I have a strong passion for entrepreneurship, software security, and technology.
                    Motivated to advance and work with others to achieve a common goal and expand my skill set through mentorship and challenging projects.</p>
                    <p> At Big Creek Agency no job is to big or to small we do it all. Hosting, Development, Design, and Troubleshooting we have all of your development needs.</p>
                    <h3>Justin O'Dea: Owner and Operator</h3>
                    <img src="/assets/img/staff/Odea-22.jpg" alt="Justin" class="center"></img>
            </div>
        </AboutUsStyled>
    );
}
export default AboutUs;
const AboutUsStyled = styled.div`
    .wrapper {
        display: block;
        margin:auto;
        padding-top: 100px;
        background-color: #AAA7A6;
        padding-left: 5vw;
        padding-right: 5vw;
        padding-bottom: 100px;
    }
    h3{
        text-align: center !important;
    }
    p{
        text-align: left;
        font-weight: Bold;
    }
    img{
        display: block;
        margin-left: auto;
        margin-right: auto;
        max-width: 25%;
        max-height: 25%;
    }
`;