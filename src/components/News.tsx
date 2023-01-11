import * as React from "react";
import { useNavigate } from "react-router-dom";

type NoticeProps = {
  news: News;
};

const News: React.FC<NoticeProps> = ({ news }) => {
  const navigate = useNavigate();
  return (
    <div
      className="notice d-flex justify-content-between align-items-center py-md-4 py-3 px-md-3 px-1"
      key={news.id} onClick={() => navigate(`/news/${news.id}`)}
    >
      <div className="d-flex justify-content-md-start justify-content-between align-items-center">
        {/* <p className="noticeDate me-md-3 me-0">{notice.regDate}</p> */}
        <div className="titles">
          <p className="noticeTitle">
            {news.title}
            {/* <span> | {notice.clinicId}</span> */}
          </p>
          {news.subTitle && (
            <p className="noticeSubtitle mt-2">{news.subTitle}</p>
          )}
        </div>
      </div>
      <p className="noticeMore">
        查看更多<span className="material-icons ms-1">arrow_circle_right</span>
      </p>
    </div>
  );
};

export default News;
