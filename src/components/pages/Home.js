import React from "react";
import "../../App.css";
import Cards from "../Recommand";
import FirstSection from "../FirstSection";
import Footer from "../Footer";
import styled from "styled-components";

function Home() {
  return (
    <>
      <FirstSection />

      <Cards />

      <Footer />
    </>
  );
}

export default Home;
