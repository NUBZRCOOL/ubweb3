import React from "react";
import '../static/css/Navbar.css';


const Navbar = () => {

    return (

        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" id="amogi">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Navigation</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="/">Main</a>
                            <a className="nav-link" href="/info">Information</a>
                            <a className="nav-link" href="/about">About</a>
                            <a className="nav-link" href="/games">Games</a>
                            <a className="nav-link" href="/webbrowser">Web Browser</a>
                            <a className="nav-link disabled" href="" aria-disabled="true">Soundboard</a>
                        </div>
                    </div>
                </div>
            </nav>
            <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#demo" id="settings"> Settings </button>

            <div className="offcanvas offcanvas-start" id="demo">
                <div className="offcanvas-header">
                    <h1 className="offcanvas-title">Settings</h1>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"></button>
                </div>
                    <div className="offcanvas-body">
                    <button onClick={ldm} id="ldm">Light/Dark mode</button><br/>

                </div>
            </div>
        </>
    )
}

export default Navbar;