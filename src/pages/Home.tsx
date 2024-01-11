import React from 'react';
import '../static/css/Home.css';

import Navbar from '../components/Navbar';

import gm2Logo from '../static/imgs/gm2.png'
import _1v1lolLogo from '../static/imgs/1v1lol.png';
import agarioLogo from '../static/imgs/agario.png';


const Home = () => {

    return (

        <>

            <Navbar/>


            <title>Unblocked Websites</title>

            <div id="background">
                <h1>Welcome to Adam and Nubaid's Unblocked Websites</h1>
            </div>




            <div className="row" id="gamecards">

                <div className="card" style={{"width": "18rem"}}>
                    <img src={gm2Logo} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Gun Mayhem 2</h5>
                        <p className="card-text">The sequel to Gun Mayhem is finally here! This time with even more chaos. Defeat your powerful enemies by shooting them or blasting them off the platform with dynamite. This game has a single-player campaign mode, custom games, and a series of challenges. Once you have selected the game mode, you can customize the appearance, color, and loadout of your character. You can change their shirt, hat, and face, plus their perks and weapon.</p>
                        <a href="/gm2" className="btn btn-primary">Play Now!</a>
                    </div>
                </div>
                
                
                <div className="card" style={{"width": "18rem"}}>
                    <img src={_1v1lolLogo} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">1v1.lol</h5>
                        <p className="card-text">Discover 1v1.lol, the online building simulator and third person shooting game. Battle royale, build fight, box fight, zone wars and more game modes to enjoy!</p>
                        <a href="/1v1lol" className="btn btn-primary">Play Now!</a>
                    </div>
                </div>

                
                <div className="card" style={{"width": "18rem"}}>
                    <img src={agarioLogo} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Agario</h5>
                        <p className="card-text"> Agar.io is a massively multiplayer online action game created by Brazilian developer Matheus Valadares. Players control one or more circular cells in a map representing a Petri dish.</p>
                        <a href="/agario" className="btn btn-primary">Play Now!</a>
                    </div>
                </div>
            
            
            </div>
        </>
    )
}

export default Home;