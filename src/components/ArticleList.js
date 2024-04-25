import React from "react";
import Article from "./Article";

const ArticleList = ({ posts }) => {
  const articleElement = posts.map((post) => {
    return (
      <Article
        key={post.id}
        title={post.title}
        date={post.date}
        preview={post.preview}
        minutes={post.minutes}
      />
    );
  });
  return <main>{articleElement}</main>;
};

export default ArticleList;
