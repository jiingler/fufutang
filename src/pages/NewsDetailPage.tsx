import { useNavigate, useParams } from "react-router-dom";
import fbShare from "../assets/logo/fb-share.png";
import lineShare from "../assets/logo/line-share.png";
import Button from "../components/Button";
import NewLabel from "../components/NewLabel";

const NewsDetailPage = () => {
  const navigate = useNavigate();
  const newsId = useParams();

  const href =
    "javascript: void(window.open('http://www.facebook.com/share.php?u='.concat(encodeURIComponent(location.href)) ));";

  const news = {
    id: "001",
    title: "福福堂慶開幕活動",
    subTitle: "活動期間02/01 ~ 02/28",
    clinics: [{ id: "fufu", name: "福福堂" }],
    imageUrl:
      "https://www.huish.ac.uk/wp-content/uploads/2022/06/Open-Event.jpg",
    paragraphs: [
      "賀開幕!於開幕期間至福福堂中醫診所看診，即可獲得XXX乙個。賀開幕!於開幕期間至福福堂中醫診所看診，即可獲得XXX乙個。\n賀開幕!於開幕期間至福福堂中醫診所看診，即可獲得XXX乙個。賀開幕!於開幕期間至福福堂中醫診所看診，即可獲得XXX乙個。賀開幕!於開幕期間至福福堂中醫診所看診，即可獲得XXX乙個。賀開幕!於開幕期間至福福堂中醫診所看診，即可獲得XXX乙個。",
      "活動日期: 112年2月5日 ~ 112年2月28日",
    ],
    regDate: "2023-01-08",
  };
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
            {news.title}
            <NewLabel dateString={news.regDate} />
          </h3>
          <p className="regDate">公告日期：{news.regDate}</p>
        </div>
        <div className="content p-md-5 p-3">
          {news?.imageUrl && (
            <div className="image-container">
              <img src={news.imageUrl} alt={news.title} />
            </div>
          )}
          <div className="paragraphs mt-md-5 mt-3">
            {!!news?.paragraphs && news.paragraphs.length > 0 && (
              <>
                {news.paragraphs.map((paragraph, idx) => (
                  <p className="paragraph mb-4" key={idx}>
                    {paragraph}
                  </p>
                ))}
              </>
            )}
          </div>
        </div>
        <div className="share d-flex align-items-center justify-content-md-start justify-content-center">
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
        </div>
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
