import React from "react";
import MinutesToRead from "./MinutesToRead";

const Article = ({ title, date, preview, minutes }) => {
  const defaultDate = "January 1, 1970";
  return (
    <article>
      <h3>{title}</h3>
      <small>{date ? date : defaultDate}</small>
      <p>{preview}</p>
      <MinutesToRead minutes={minutes} />
    </article>
  );
};

export default Article;
