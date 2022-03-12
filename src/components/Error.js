import React from "react";
import { Link } from "react-router-dom";
import Hero from "./Hero";

const Error = () => {
  return (
    <>
      <Hero text="Error 404! Page Not Found" />
      <div className="container">
        <h2>
          Go back to Home page <Link to="/">Click Here</Link>
        </h2>
      </div>
    </>
  );
};

export default Error;
