import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Home from "./components/Home";
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Home />
        <div className='backshadow'>
          <Section1 />
          <Section2 />
        </div>
      </Router>
    </>
  );
}

export default App;
