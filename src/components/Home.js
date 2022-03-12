import React from "react";
import Hero from "./Hero";
import img from "../img/b1.jpg";

const Home = () => {
  return (
    <>
      <Hero
        text="One of the Best Movie Collection available here on MovieBrowser"
        img={img}
      />
      <div className="container">
        <p className="home-para lead p-2 my-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus
          nostrum vero, nihil magnam ullam neque vel maiores, cumque velit
          officia aperiam doloremque praesentium quos! Voluptas eos perspiciatis
          eum officia aliquid sequi fuga nulla. Expedita nam facilis, non magni
          qui deleniti magnam, hic voluptas exercitationem, omnis est ratione
          sunt? Tempore quisquam reprehenderit vel deserunt quaerat, delectus,
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

export default Home;
