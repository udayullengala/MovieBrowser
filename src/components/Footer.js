import React from "react";
import pay from "../img/pay.png";
import play from "../img/play.jpg";
import "./Css/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h4>MovieBrowser</h4>
              <p>
                <strong>Address : </strong> Lorem ipsum dolor sit amet
                consectetur
              </p>
              <p>
                <strong>Phone : </strong> +9174932823
              </p>
              <div className="follow">
                <i className="fa fa-instagram"></i>
                <i className="fa fa-facebook"></i>
                <i className="fa fa-twitter"></i>
                <i className="fa fa-linkedin"></i>
              </div>
            </div>
            <div className="col-md-3">
              <h4>About</h4>
              <div className="about">
                <Link to="/about">About</Link>
                <Link to="/">Contact</Link>
                <Link to="/">Blogs</Link>
                <Link to="/">Terms & Conditions</Link>
                <Link to="/">Help</Link>
              </div>
            </div>
            <div className="col-md-3">
              <h4>Account</h4>
              <div className="about">
                <Link to="/">Sign in</Link>
                <Link to="/">Sign Up</Link>
                <Link to="/">My Watchlist</Link>
                <Link to="/">New Released</Link>
                <Link to="/">Top Movies</Link>
              </div>
            </div>
            <div className="col-md-3">
              <h4>Install App</h4>
              <p>From Play Store</p>
              <img className="play img-fluid" src={play} alt="" />
              <p>Secured Payment Gateways</p>
              <img className="img-fluid" src={pay} alt="" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
