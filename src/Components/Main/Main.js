import React from 'react';
import { Routes, Route } from 'react-router-dom'

import Home from '../../Pages/Home/Home';
import About from '../../Pages/About/About';
import Services from '../../Pages/Services/Services';
import Why from '../../Pages/Why/Why';
import Team from '../../Pages/Team/Team';
import Login from '../../Pages/Login/Login';

function Main(props) {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/about' element={<About></About>}></Route>
                <Route path='/services' element={<Services></Services>}></Route>
                <Route path='/why' element={<Why></Why>}></Route>
                <Route path='/team' element={<Team></Team>}></Route>
                <Route path='/login' element={<Login></Login>}></Route>
            </Routes>
        </>
    );
}

export default Main;