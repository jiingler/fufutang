import { useState, useEffect } from "react";
import News from "../components/News";
import PageTitle from "../components/PageTitle";
import { AppService } from "../services/app.service";

const NewsPage = () => {
  const [newsList, setNewsList] = useState<News[]>([]);

  const appService = new AppService();

  const getAllNews = async () => {
    return await appService.get<News[]>("News", null);
  };

  useEffect(() => {
    const fetchData = async () => {
      const news = await getAllNews();
      setNewsList([...news]);
    };
    fetchData();
  }, []);

  return (
    <div className="page">
      <PageTitle text="最新消息" />
      <div className="container my-5">
        <div className="">
          {newsList.map((news) => (
            <News news={news} key={news.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
