import React from 'react'
import styled from "styled-components";
import img1 from "../images/img-8.jpg";
import img2 from "../images/img-1.jpg";
import img3 from "../images/paris.jpg";
import img4 from "../images/img-3.jpg";
import img5 from "../images/img-4.jpg";
import img6 from "../images/img-7.jpg";
import info1 from "../images/info1.png";
import info2 from "../images/info2.png";
import info3 from "../images/info3.png";
const Recommend = () => {
    const data=[
        {
      image: img6,
      title: "Singapore",
      subTitle: "Singapore, officialy thr Republic of Singapore, is a",
      cost: "38,800",
      duration: "Approx 2 night trip",
    },
    {
      image: img2,
      title: "Thailand",
      subTitle: "Thailand is a Southeast Asia country. It's known for",
      cost: "54,200",
      duration: "Approx 2 night trip",
    },
    {
      image: img3,
      title: "Paris",
      subTitle: "Paris, France's capital, is a major European city and a",
      cost: "45,500",
      duration: "Approx 2 night trip",
    },
    {
      image: img4,
      title: "New Zealand",
      subTitle: "New Zealand is an island country in the",
      cost: "24,100",
      duration: "Approx 1 night trip",
    },
    {
      image: img5,
      title: "Bora Bora",
      subTitle: "Bora Bora is a small South Pacific island northwest of",
      cost: "95,400",
      duration: "Approx 2 night 2 day trip",
    },
    {
      image: img1,
      title: "London",
      subTitle: "London, the capital of England and the United",
      cost: "38,800",
      duration: "Approx 3 night 2 day trip",
    },
     ]

   
  return (
      <Section id="recommend">
          <div className="destinations">
              {data.map((destination) => {
                  return (
                    <div className="destination">
                      <img src={destination.image} alt="" />
                      <h3>{destination.title}</h3>
                      <p>{destination.subTitle}</p>
                      <div className="info">
                        <div className="services">
                          <img src={info1} alt="" />
                          <img src={info2} alt="" />
                          <img src={info3} alt="" />
                        </div>
                      </div>
                    </div>
                  );
              })}
          </div>
 </Section>
  )
}

export default Recommend;

const Section = styled.section`
  padding: 2rem 0;
  .title {
    text-align: center;
  }
  .destinations {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 0 3rem;
    .destination {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      background-color: #8338ec14;
      border-radius: 1rem;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      img {
        width: 100%;
      }
      .info {
        display: flex;
        align-items: center;
        .services {
          display: flex;
          gap: 0.3rem;
          img {
            border-radius: 1rem;
            background-color: #4d2ddb84;
            width: 2rem;
            padding: 0.3rem 0.4rem;
          }
        }
        display: flex;
        justify-content: space-between;
      }
      .distance {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .destinations {
      grid-template-columns: 1fr;
      padding: 0;
    }
  }
`;
