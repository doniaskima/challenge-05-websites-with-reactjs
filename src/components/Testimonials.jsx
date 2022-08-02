import React from "react";
import styled from "styled-components";
import avatar1 from "../images/avatarimg1.jpg";
import avatar2 from "../images/avatarimg2.jpg";
import avatar3 from "../images/avatarimg3.jpg";
const Testimonials = () => {
  return (
    <Section id="testimonials">
      <div className="title">
        <h2>happy cutomers</h2>
      </div>
      <div className="testimonials">
        <div className="testimonial">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            asperiores eaque.
          </p>
          <div className="info">
            <img src={avatar1} alt="" />
            <div className="setails">
              <h4>Camilia</h4>
              <span>web devolver</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            asperiores eaque.
          </p>
          <div className="info">
            <img src={avatar2} alt="" />
            <div className="setails">
              <h4>Camilia</h4>
              <span>web devolver</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            asperiores eaque.
          </p>
          <div className="info">
            <img src={avatar3} alt="" />
            <div className="setails">
              <h4>Camilia</h4>
              <span>web devolver</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;
const Section = styled.section`
   .title {
     margin: 5rem 0;
    text-align: center;
    margin-bottom: 2rem;
  }
  .testimonials {
    display: flex;
    justify-content: center;
    margin: 0 2rem;
    gap: 2rem;
    .testimonial {
      background-color: aliceblue;
      padding: 2rem;
      border-radius: 0.5rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      .info {
        display: flex;
        justify-content: center;
        gap: 1rem;
        align-items: center;
        margin-top: 1rem;
        img {
          border-radius: 3rem;
          height: 3rem;
        }
        .details {
          span {
            font-size: 0.9rem;
          }
        }
      }
    }
  }
`;
