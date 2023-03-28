import { useEffect, useState } from "react";
import Article from "../components/Article";
import PageTitle from "../components/PageTitle";
import { AppService } from "../services/app.service";

const ArticlePage = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  const appService = new AppService();

  const getAllExternalLinks = async () => {
    return await appService.get<Article[]>("ExternalLinks", null);
  };

  useEffect(() => {
    const fetchData = async () => {
      const articles = await getAllExternalLinks();
      setArticles([...articles]);
    };
    fetchData();
  }, []);
  return (
    <div className="page ">
      <PageTitle text="專題報導" />
      <div className="container">
        <div className="row g-4 my-5">
          {articles &&
            articles.map((article, idx) => (
              <Article key={idx} article={article} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
