import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Section1 from "./components/Section1";
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
        </div>
      </Router>
    </>
  );
}

export default App;
