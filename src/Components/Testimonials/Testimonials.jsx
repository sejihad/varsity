import React, { useRef } from "react";
import back_icon from "../../assets/back-icon.png";
import next_icon from "../../assets/next-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

import "./Testimonials.css";
const userName = "William Jackson";
const address = "Edusity, USA";
const desc =
  "Choosing to pursure my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment o academic excellence have ruly exceeded my expectaions.";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;
  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>{userName} 1</h3>
                  <span>{address}</span>
                </div>
              </div>
              <p>{desc}</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>{userName} 2</h3>
                  <span>{address}</span>
                </div>
              </div>
              <p>{desc}</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>{userName} 3</h3>
                  <span>{address}</span>
                </div>
              </div>
              <p>{desc}</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>{userName} 4</h3>
                  <span>{address}</span>
                </div>
              </div>
              <p>{desc}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
