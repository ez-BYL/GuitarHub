import React, { useRef } from "react";
import "./Testemonials.css";
import right_arrow from "../../assets/arrow.svg";
import left_arrow from "../../assets/left-arrow.svg";
import gagan from "../../assets/gagan.jpg";
import gaurab from "../../assets/gaurab.jpg";
import suraj from "../../assets/suraj.jpg";
import ajay from "../../assets/ajay.jpg"

const Testemonials = () => {
    const slider = useRef();
    let tx = 0;
  const slideForward = ()=>{
      if(tx > -50){
        tx -= 25;
      }
      slider.current.style.transform = `translateX(${tx}%)`;
  }
  const slideBackward = ()=>{
    if(tx < 0){
        tx += 25;
      }
      slider.current.style.transform = `translateX(${tx}%)`;
 
  }

  return (
    <div className="testemonial">
      <img src={right_arrow} alt="" className="next-btn" onClick={slideForward}/>
      <img src={left_arrow} alt="" className="back-btn" onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={gagan} alt="" />
                <div>
                  <h2>Gagan Jung Gurung</h2>
                  <span>
                    Sakhejung-5, Illam
                  </span>
                </div>
              </div>
              <p>
              ⭐⭐⭐⭐⭐<br/>
              "I had an amazing experience at GuitarHub! The moment I walked in, I was greeted by friendly staff who genuinely love music. The selection of guitars was impressive, with everything from beginner models to high-end instruments. The knowledgeable staff helped me find the perfect acoustic guitar for my needs and provided great advice on accessories. I left feeling excited about my new purchase and can't wait to come back for lessons!"
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="guitar-info">
                <img src={gaurab} alt="" />
                <div>
                  <h2>Gaurab Prasain</h2>
                  <span>
                    Bhadrapur-10, Jhapa
                  </span>
                </div>
              </div>
              <p>
              ⭐⭐⭐⭐<br/>
 I was captivated by the vibrant atmosphere filled with music. The quality of the instruments is top-notch; I was particularly impressed by their collection of vintage guitars. The staff's expertise was evident as they patiently answered all my questions and even offered me a chance to test out a few models. I walked out not only with a beautiful guitar but also with valuable knowledge. Highly recommend this place to any guitarist!"              "GuitarHub is truly a hidden gem! As soon as I entered,
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="guitar-info">
                <img src={suraj} alt="" />
                <div>
                  <h2>Suraj Rai</h2>
                  <span>
                    Haldibari-5, Jhapa
                  </span>
                </div>
              </div>
              <p>
              ⭐⭐⭐<br/>
              "I can't say enough good things about GuitarHub. They offer an unparalleled customer service experience that made me feel like part of the family. The shop hosts regular workshops and jam sessions, creating a welcoming community for musicians of all levels. I attended one of their acoustic nights and met some fantastic local talents. Plus, the prices are fair, and they have a fantastic financing option for high-end instruments. If you're looking for a great guitar shop that truly cares about its customers, this is the place to go!"
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={ajay} alt="" />
                <div>
                  <h2>Ajay Kerung</h2>
                  <span>
                   Birtamode-10, Jhapa
                  </span>
                </div>
              </div>
              <p>
              ⭐⭐⭐⭐⭐<br/>
              "I had an amazing experience at GuitarHub! The moment I walked in, I was greeted by friendly staff who genuinely love music. The selection of guitars was impressive, with everything from beginner models to high-end instruments. The knowledgeable staff helped me find the perfect acoustic guitar for my needs and provided great advice on accessories. I left feeling excited about my new purchase and can't wait to come back for lessons!"
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testemonials;
