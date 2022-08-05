import React from 'react'
import crisp from "../images/crisp-works.png"
import lifecycle from "../images/lifecycle-works.png"
import calender from "../images/calendar-works.jpg"
import "../styles/Section2.css"
const Section2 = () => {
    return (
        <div className="section2">
            <h2 className='margincenter textcenter playfairFont spacerBotLight'>Our Latest Works</h2>

            <div className={`worksdiv grid grid2fr margincenter  `}>
                <div className='worktext flex'>
                    <div>
                        <h3>Redesigning Crisp.im</h3>
                        <p className='spacerTopLight montserrat'>Illustration, Web Design</p>
                    </div>
                    <div className='btnwork textcenter whiteT ' style={{ backgroundImage: "linear-gradient(135deg,#72e9f3 -20%,#404de6 120%)" }}>VIEW PROJECT</div>
                </div>
                <div className='workback grid gridConCenter'><img className='margincenter' src={crisp} alt="rocket" /></div>
            </div>

            <div className='worksdiv grid grid2fr margincenter spacerTop3'>
                <div className='worktext flex tentacleText'>
                    <div>
                        <h3>Beautiful Landing Page for Lifecycle</h3>
                        <p className='spacerTopLight montserrat'>Illustration, Web Design</p>
                    </div>
                    <div className='btnwork textcenter whiteT ' style={{ backgroundImage: "linear-gradient(225deg,#1ad4bb,#b2de94)" }}>VIEW PROJECT</div>
                </div>
                <div className='workback tentacle grid gridConCenter'><img className='margincenter' src={lifecycle} alt="tentacles" /></div>
            </div>

            <div className='worksdiv grid grid2fr margincenter spacerTop3' style={{ boxShadow: "0 5px 140px 0 rgba(130,136,171,.2)" }}>
                <div className='worktext flex'>
                    <div>
                        <h3>2018 Desk Calendar Inventor Edition</h3>
                        <p className='spacerTopLight montserrat'>Illustration, Product Design</p>
                    </div>
                    <div className='btnwork textcenter whiteT ' style={{ backgroundImage: "linear-gradient(135deg,#8254e5,#83afe3 150%)" }}>VIEW PROJECT</div>
                </div>
                <div className='workback calendar grid gridConCenter'><img className='margincenter' src={calender} alt="tentacles" /></div>
            </div>
            <div className='footer grid ' style={{ placeContent: "center" }}>
                <div className='spacerTop3'>
                    <h2 className='textcenter margincenter whiteT spacerTop3'>Interested in working with us?</h2>
                    <div  className='btn textcenter whiteT spacerTop3 spacerBot2' style={{ backgroundColor: "#ef4b6c" }}>LET'S TALK!</div>
                    <div className='flex footButtons marginCenter textcenter' style={{ justifyContent: "center" }}>
                        <a href="https://github.com/doniaskima" target="_blank" rel="noreferrer"><div><i className="fab fa-github"></i></div></a>
                        <a href="https://www.linkedin.com/in/donia-skima/" target="_blank" rel="noreferrer"><div><i className="fab fa-linkedin-in"></i></div></a>
                    </div>
                </div>

            </div>
        </div>
         
    )
}

export default Section2