import { useEffect, useState } from "react";
import PageTitle from "../components/PageTitle";
import { AppService } from "@/utils/app.service";
import Article from "@/components/Article";

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
      <PageTitle text="健康專欄" />
      <div className="container">
        <div className="row g-4 my-md-5 my-3">
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
