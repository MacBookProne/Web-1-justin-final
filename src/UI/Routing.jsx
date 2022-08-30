import React from 'react';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';

import Home from './Pages/Home/Home.jsx';
import Clients from './Pages/Clients/Clients.jsx';
import Contact from './Pages/Contact.jsx';
import AboutUs from './Pages/AboutUs.jsx';
import Login from './Pages/Login.jsx';


import ClassWork from './Pages/ClassWork/ClassWork.jsx';
import Homework from './Pages/ClassWork/Homework/Homework.jsx';
import SwapList from './Pages/ClassWork/Swapper/SwapList.jsx';
import JavaScript from './Pages/ClassWork/JavaScript/JavaScript.jsx';
import ControlledInput from './Pages/ClassWork/ControlledInput.jsx';
import Forms from './Pages/ClassWork/Forms.jsx';


const Routing = () => {
    return (
        <RoutingStyled className='Routing'>
            <Routes>
                <Route element={ <Home /> }         path=''  />
                <Route element={ <Clients /> }        path='clients'  />
                <Route element={ <Contact /> }      path='contact'  />
                <Route element={ <AboutUs />}        path='aboutus'/>
                <Route element={ <Login /> }        path='login'  />

                <Route element={ <ClassWork /> }    path='class'>
                    <Route element={ <Homework /> }         path=''  />
                    <Route element={ <SwapList /> }         path='swapper'  />
                    <Route element={ <JavaScript /> }       path='javascript'  />
                    <Route element={ <ControlledInput /> }  path='controlled-input'  />
                    <Route element={ <Forms /> }            path='forms' />
                </Route>
            </Routes>
        </RoutingStyled>
    );
}

export default Routing;

const RoutingStyled = styled.div`
`;