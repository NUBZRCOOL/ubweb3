import React from 'react'
import Navbar from '../components/Navbar';

const Info = () => {

    return (
        
        <>
           
           <Navbar/>
           
            <h1 id="faq"><strong>Information: What you need and Where it is</strong></h1>

            <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    How can I recommend games?
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>You can recommend games on our forms.</strong> It is avaliable on our forms page in the Navigation Bar. Please use it for intended purpose only or any rude comments can/might be reported!
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Why aren't these games loading?
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>All games sould load properly on the correct browser and Wifi.</strong> If it is not loading and you believe it is on our end, contact us Adam's email: adam.alrefaee@gmail.com
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Someone I know did something wrong with your website. What should I do?
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>Please let us know immediately at our school emails.</strong> <p>We would be more than welcome to address your concern and solve a problem. We also have no trouble getting the admin involved in a scenario as Br. Haseeb loves this website :D.</p>
                </div>
                </div>
            </div>
            </div>

            <div id="form-cage">
                
                    <h3>Submit games that you want to see here:
                    <button className="form" onClick={forum}>Games Forum (No jokes please)</button>
            </h3>
            <h3>
                Submit improvements you may want to see to the website, like <button className="form" onClick={f}>Features</button> or even <button className="form" onClick={wc}> Website composition</button>
            </h3>
            </div>
            <div className="mt-4 p-5 bg-primary text-white rounded">
            <h1>Our Discord Server!!</h1>
            <p>We now have an updates discord server. Our original website was blocked, and we didn't want to have a hard time spreading it. So we decided to make a server. It will also include updates, new features, live testing, and more! Be sureto join to never have to be concerned about ubweb again, and join for ease. </p>

            <a id="disc" href="https://discord.gg/E6Jg5rWsXa" style={{"color": "black"}}>Link</a>
            
            
            </div>
        </>        
    )
}

export default Info;