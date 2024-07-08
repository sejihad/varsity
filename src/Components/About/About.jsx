import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";
import "./About.css";
const title = "ABOUT UNIVERSITY";
const subTitle = "Nurturing Tommorow's Leaders Today";
const desc_1 =
  "Embark on a transformative educational journey with our university's comperhensive education programs Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education";
const desc_2 =
  " With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.";
const desc_3 =
  " Whether you aspire to become a teacher, administrator, counselor, or  educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of educcation.";

const About = ({ setVideoPlay }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img
          src={play_icon}
          alt=""
          className="play-icon"
          onClick={() => {
            setVideoPlay(true);
          }}
        />
      </div>
      <div className="about-right">
        <h3>{title}</h3>
        <h2>{subTitle}</h2>
        <p>{desc_1}</p>
        <p>{desc_2}</p>
        <p>{desc_3}</p>
      </div>
    </div>
  );
};

export default About;
