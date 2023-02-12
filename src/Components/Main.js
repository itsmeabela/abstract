import React from "react";
import mainContents from "./main-content";

const Main = () => {
  return (
    <section className="main_section">
      {mainContents.map((item, idx) => {
        const { image, title, description, link } = item;
        return (
          <div className="main_container" key={idx}>
            <img src={image} alt="" />
            <div className="main_content">
              <h3>{title}</h3>
              <p>{description}</p>
              <a href={link} className="main_link">
                Learn More
              </a>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Main;
