import * as React from "react";

type NoticeProps = {
  notice: News;
};

const Notice: React.FC<NoticeProps> = ({ notice }) => {
  return (
    <div
      className="notice d-flex justify-content-between align-items-center py-md-4 py-3 px-md-3 px-1"
      key={notice.id}
    >
      <div className="d-flex justify-content-md-start justify-content-between align-items-center">
        {/* <p className="noticeDate me-md-3 me-0">{notice.regDate}</p> */}
        <div className="titles">
          <p className="noticeTitle">
            {notice.title}
            {/* <span> | {notice.clinicId}</span> */}
          </p>
          {notice.subTitle && (
            <p className="noticeSubtitle mt-2">{notice.subTitle}</p>
          )}
        </div>
      </div>
      <p className="noticeMore">
        查看更多<span className="material-icons ms-1">arrow_circle_right</span>
      </p>
    </div>
  );
};

export default Notice;
