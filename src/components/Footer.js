// import React, { useEffect } from 'react'
// import { useInView } from "react-intersection-observer";

// const Footer = ({ setFootView }) => {
//     const { ref, inView } = useInView({
//         rootMargin: '-50px',
//     });
//     useEffect(() => {
//         setFootView(inView)
//     }, [inView, setFootView])
//     return (
//         <div className="Footer grid" style={{ placeContent: "center" }}>
//             <div className="spacerTop3">
//                 <h2 className="textcenter margincenter">Interested in working with us?</h2>
//                 <div className='btn textcenter whiteT spacerTop3 spacerBot2' style={{ backgroundColor: "#ef4b6c" }}>LET'S TALK!</div>
//                 <div className='flex footButtons marginCenter textcenter' style={{ justifyContent: "center" }}>
//                     <a href="https://github.com/doniaskima" target="_blank" rel="noreferrer"><div><i className="fab fa-github"></i></div></a>
//                     <a href="https://www.linkedin.com/in/donia-skima/" target="_blank" rel="noreferrer"><div><i className="fab fa-linkedin-in"></i></div></a>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Footer