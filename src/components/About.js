import React from "react";
import Hero from "./Hero";
import img2 from "../img/about.jpg";

const About = () => {
  return (
    <>
      <Hero text="#About Us. Why we Exist?" img2={img2} />
      <div className="container">
        <p className="about-para lead p-2 my-5">
          Tempore quisquam reprehenderit vel deserunt quaerat, delectus,
          inventore earum maxime accusamus et, exercitationem nulla. Iste
          voluptatem laborum adipisci! Excepturi, repellendus earum eaque
          aliquam velit ex, adipisci totam incidunt delectus nulla doloribus
          quaerat vitae ab distinctio repellat debitis voluptatem, assumenda
          modi ad doloremque sit ducimus! Vitae perferendis fuga accusantium
          pariatur labore doloremque tempora? vel deserunt quaerat, delectus,
          inventore earum maxime accusamus et, exercitationem nulla. Iste
          voluptatem laborum adipisci! Excepturi, repellendus earum eaque
          aliquam velit ex, adipisci totam incidunt delectus nulla doloribus
          quaerat vitae ab distinctio repellat debitis voluptatem, assumenda
          modi ad doloremque sit ducimus! Vitae perferendis fuga accusantium
          pariatur labore doloremque tempora?
        </p>
      </div>
    </>
  );
};

export default About;
