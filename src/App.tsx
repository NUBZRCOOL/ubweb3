import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from "./pages/Home";
import About from "./pages/About";
import Webbrowser from './pages/Webbrowser';
import Info from './pages/Info';
import Buttons from './pages/Buttons';

// import Navbar from "./components/Navbar";

import _1v1lol from './games/1v1lol';
import Agario from './games/Agario';
import Bbstars from './games/Bbstars';
import Fallbeans from './games/Fallbeans';
import GalaxyRush from './games/GalaxyRush';
import GeometryDash from './games/GeometyDash';
import GM2 from './games/GM2';
import RocketSoccer from './games/RocketSoccer';
import Slope from './games/Slope';
import SubwaySurfer from './games/SubwaySurfer';


const App = () => {


    


    return (

        <Router>

            {/* <Navbar /> */}

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About/>} />
                <Route path='/webbrowser' element={<Webbrowser/>} />
                <Route path='/info' element={<Info/>} />
                <Route path='/games' element={<Buttons/>} />

                <Route path='/1v1lol' element={<_1v1lol/>} />
                <Route path='/agario' element={<Agario/>} />
                <Route path='/bbstars' element={<Bbstars/>} />
                <Route path='/fallbeans' element={<Fallbeans/>} />
                <Route path='/galaxyrush' element={<GalaxyRush/>} />
                <Route path='/geometrydash' element={<GeometryDash/>} />
                <Route path='/gm2' element={<GM2/>} />
                <Route path='/rocketsoccer' element={<RocketSoccer/>} />
                <Route path='/slope' element={<Slope/>} />
                <Route path='/subwaysurfer' element={<SubwaySurfer/>} />
            </Routes>
        </Router>
    );
}

export default App;