import { useEffect, useState } from "react";
import { GraphScrapService } from "../services/graph-scraper.service";

type ArticleProps = {
  article: Article;
};

const Article: React.FC<ArticleProps> = ({ article }) => {
  return (
    <div className="col-md-6 col-12 article">
      <div className="image-container">
        <img src={article?.image} alt="" />
      </div>
    </div>
  );
};

export default Article;
