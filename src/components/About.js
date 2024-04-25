import React from "react";

const About = ({ image, about }) => {
  const defaultImage = "https://via.placeholder.com/215";
  return (
    <aside>
      <img alt="blog logo" src={image ? image : defaultImage}></img>
      <p>{about}</p>
    </aside>
  );
};

export default About;
