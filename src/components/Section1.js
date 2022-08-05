import React from 'react'
import uiux from "../images/Ui-ux-icon.png"
import ghosty from "../images/GHOSTY.png"
import third from "../images/third-icon.png"

import item4 from "../images/4to-item.png";

import item5 from "../images/5to-icon.png";
import item6 from "../images/6to-icon.png";
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
        </div>
    )
}

export default section1