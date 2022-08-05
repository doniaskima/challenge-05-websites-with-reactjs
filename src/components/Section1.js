import React from 'react'
import uiux from "../images/Ui-ux-icon.png"
import ghosty from "../images/GHOSTY.png"
import third from "../images/third-icon.png"

import item4 from "../images/4to-item.png";

import item5 from "../images/5to-icon.png";
import item6 from "../images/6to-icon.png";
import teachable from "../images/teachable.png"
import roger from "../images/roger.png"
import grab from "../images/grab.png"
import agoda from "../images/agoda.png"
import hoopsai from "../images/hoopsai.png"
import getsafe from "../images/getsafe.png"
import flyr from "../images/flyr.png"
import anyleads from "../images/anyleads.png";
import crisp from "../images/crisp.png";
import "../styles/Section1.css";
const section1 = () => {
    return (
        <div className="container">
            <h2 className="margincenter textcenter playfairFront spacerBotLight">What We Do</h2>
            <div className={`iconsgrid grid margincenter textcenter`}>
                <div>
                    <img src={uiux} alt="icon" className="icon-img margincenter" />
                    <h3>UX/UI</h3>
                    <p>Landing Pages , User Flow ,Wireframing ,Prototyping , Mobile App Design ,Web App</p>
                </div>
                <div>
                    <img src={ghosty} alt="icon" className="icon-img margincenter" />
                    <h3>Icon/ Illustration</h3>
                    <p>Character Design, Icon Set, Illustration Guide, Illustration Set</p>
                </div>
                <div>
                    <img src={third} alt="icon" className="icon-img margincenter" />
                    <h3>Branding</h3>
                    <p>Visual Identity, Stationary Kit, Marketing Materials</p>
                </div>
                <div>
                    <img src={item4} alt="icon" className="icon-img margincenter" />
                    <h3>Development</h3>
                    <p>HTML/CSS, JavaScript Animation, WordPress, Responsive Website</p>
                </div>
                <div >
                    <img className="icon-img margincenter" src={item5} alt="" />
                    <h3>Motion</h3>
                    <p>2D Animation, UI Motion</p>
                </div>
                <div >
                    <img className="icon-img margincenter" src={item6} alt="" />
                    <h3>Photography</h3>
                    <p>Travel Photography, Product Photography</p>
                </div>

            </div>
            <h2 className="margincenter textcenter playfairFront">Clients</h2>
            <p className="margincenter textcenter loraFont spacerBotLight">We’ve been working with teams around the world.</p>
            <div className="clientsGrid flex margincenter">
                <div className="dissmall">
                    <div> <img src={teachable} alt="" />  </div>
                </div>
                <div className="dissmall">
                    <div> <img src={roger} alt="" /> </div>
                    <div> <img src={grab} alt="" /> </div>
                </div>
                <div>
                    <div className="displaysmall"><img src={roger} alt="" /></div> 
                    <div className='client2'><img src={hoopsai} alt="" /></div>
                    <div className='client1'><img src={agoda} alt="" /></div>
                    <div className='client2'><img src={getsafe} alt="" /></div>

                    <div className="displaysmall"><img src={grab} alt="" /></div>
                </div>
                <div className='dissmall'>
                    <div><img src={flyr} alt="" /></div>
                    <div><img src={anyleads} alt="" /></div>
                </div>
                <div className='dissmall'>
                    <div><img src={crisp} alt="" /></div>
                </div>
            </div>
        </div>
    )
}

export default section1