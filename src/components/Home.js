import React from 'react'
import heroguy from "../images/hero-guy-2.png";
import herogirl from "../images/hero-girl.png";
import "../styles/home.css";
import { useInView } from 'react-intersection-observer';
import herowithfoot from "../images/Hero-with-foot2.png"
const Home = ({ footView }) => {
    const { ref, inView } = useInView({
        rootMargin: '-150px',
    })
    return (
        <>
            <div className="NavHero">
                <div className="Hero">
                    <div className="flex apart heroDuo">

                        <div><img src={herogirl} className={"floatHover"} alt="icon" /></div>
                    </div>
                    <h1>pixel lovers & code players,
                        <br />we are digital seekers !</h1>
                    <p>A team of passionate designers and developers  </p>
                </div>
                <div className="fix" ref={ref}>
                    <div className="unfix">
                        <div className={`btn btnWhite  ${inView ? "" : "btntransformed"}  ${footView ? "infootview" : ""}`}>
                            {inView ? `LET'S TALK!` : <i className="far fa-envelope"></i>}

                        </div>
                    </div>
                </div>
                <div className='actual-hero'><img className="hero-with-foot" src={herowithfoot} alt="" /></div>
            </div>
        </>
    )
}

export default Home