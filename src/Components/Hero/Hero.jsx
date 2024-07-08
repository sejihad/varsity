import dark_arrow from "../../../src/assets/dark-arrow.png";
import "./Hero.css";
const title = "We Ensure better education for a better world";
const subTitle =
  "Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the ynamic field of education";
const btnText = "Explore more ";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>{title}</h1>
        <p>{subTitle}</p>
        <button className="btn">
          {btnText}
          <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
