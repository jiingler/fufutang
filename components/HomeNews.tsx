import { useEffect, useState } from "react";
import News from "./News";
import { AppService } from "@/utils/app.service";

const HomeNews: React.FC<any> = () => {
  const [newsList, setNewsList] = useState<News[]>([]);
  const appService = new AppService();

  const getAllNews = async () => {
    return await appService.get<News[]>("News", null);
  };

  useEffect(() => {
    const fetchData = async () => {
      const news = await getAllNews();
      setNewsList([...news.reverse()]);
    };
    fetchData();
  }, []);

  return (
    <>
      {newsList.map((news) => (
        <News news={news} key={news.id} />
      ))}
    </>
  );
};

export default HomeNews;
