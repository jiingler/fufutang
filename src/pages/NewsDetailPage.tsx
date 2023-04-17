import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import fbShare from "../assets/logo/fb-share.png";
import lineShare from "../assets/logo/line-share.png";
import Button from "../components/Button";
import NewLabel from "../components/NewLabel";
import { AppService } from "../services/app.service";

const NewsDetailPage = () => {
  const navigate = useNavigate();
  const { id: newsId } = useParams();

  const href =
    "javascript: void(window.open('http://www.facebook.com/share.php?u='.concat(encodeURIComponent(location.href)) ));";

  const [news, setNews] = useState<News>();

  const appService = new AppService();

  const getNewsDetail = async () => {
    return await appService.get<News>(`News/${newsId}`, null);
  };

  useEffect(() => {
    const fetchData = async () => {
      const news = await getNewsDetail();
      if (!news) {
        navigate("/news");
      }
      setNews({ ...news });
    };
    fetchData();
  }, []);

  return (
    <div className="page py-5">
      <div className="container newsDetail">
        {/* {!!news?.clinics && news?.clinics.length > 0 && (
          <div className="d-flex">
            {news.clinics.map((clinic, idx) => (
              <p key={idx}>{clinic?.name}</p>
            ))}
          </div>
        )} */}
        <div className="titleField d-md-flex justify-content-between align-items-end d-block">
          <h3 className="title mb-md-0 mb-2">
            {news?.title}
            <NewLabel dateString={news?.regDate || ""} />
          </h3>
          <p className="regDate">公告日期：{news?.regDate}</p>
        </div>
        <div className="content p-md-5 p-3">
          {news?.image && (
            <div className="image-container">
              <img src={news?.image} alt={"福福堂公告：" + news?.title} />
            </div>
          )}
          <div className="paragraphs mt-md-5 mt-3">
            {!!news?.paragraphs && news?.paragraphs.length > 0 && (
              <>
                {news?.paragraphs.map((paragraph, idx) => (
                  <p className="paragraph mb-4" key={idx}>
                    {paragraph}
                  </p>
                ))}
              </>
            )}
          </div>
        </div>
        {/* <div className="share d-flex align-items-center justify-content-md-start justify-content-center">
          <p className="me-2">分享這則文章：</p>
          <a
            className="line me-2"
            href={`https://social-plugins.line.me/lineit/share?url=${window.location.href}`}
            target="_blank"
            rel="noreferrer"
          >
            <img src={lineShare} alt="可將此頁面資訊分享至Line" />
          </a>
          <a
            className="fb"
            href="https://www.facebook.com"
            target="_blank"
            rel="noreferrer"
          >
            <img src={fbShare} alt="可將此頁面資訊分享至Facebook" />
          </a>
        </div> */}
        <div className="text-center mt-4">
          <Button
            type="primary"
            text="回上一頁"
            isOutlined={false}
            callback={() => navigate("/news")}
            iconName="arrow_circle_left"
          />
        </div>
      </div>
    </div>
  );
};

export default NewsDetailPage;
