import "./Css/Hero.css";

const Hero = ({ text, backDrop, img, img2 }) => {
  return (
    <div className="container-fluid bg-dark">
      <h2 className="hero-text">{text}</h2>
      <div className="homeImg" style={{ backgroundImage: `url(${img})` }}></div>
      <div
        className="aboutImg"
        style={{ backgroundImage: `url(${img2})` }}
      ></div>
      <div
        className="backDrop"
        style={{ backgroundImage: `url(${backDrop})` }}
      ></div>
    </div>
  );
};

export default Hero;
