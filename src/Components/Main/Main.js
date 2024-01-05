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
                <Route path='/finexo/' element={<Home></Home>}></Route>
                <Route path='/finexo/about' element={<About></About>}></Route>
                <Route path='/finexo/services' element={<Services></Services>}></Route>
                <Route path='/finexo/why' element={<Why></Why>}></Route>
                <Route path='/finexo/team' element={<Team></Team>}></Route>
                <Route path='/finexo/login' element={<Login></Login>}></Route>
            </Routes>
        </>
    );
}

export default Main;