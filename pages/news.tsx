import News from "../components/News";
import PageTitle from "../components/PageTitle";
import { AppService } from "@/utils/app.service";

const NewsPage: React.FC<{ newsList: News[] }> = ({ newsList }) => {
  return (
    <div className="page">
      <PageTitle text="最新消息" />
      <div className="container my-5">
        <div className="">
          {newsList?.map((news) => (
            <News news={news} key={news.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsPage;

export async function getServerSideProps(context: any) {
  const appService = new AppService();
  const newsList = await appService.get<News[]>("News", null);
  return {
    props: {
      newsList,
    },
  };
}
