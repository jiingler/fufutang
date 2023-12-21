import * as React from "react";
import { useRouter } from "next/navigation";
import NewLabel from "./NewLabel";

import styles from "@/styles/modules/news.module.scss";
type NoticeProps = {
  news: News;
};

const News: React.FC<NoticeProps> = ({ news }) => {
  const router = useRouter();
  return (
    <div
      className={`${styles.notice} d-flex justify-content-between align-items-center py-md-4 py-3 px-md-3 px-1`}
      key={news.id}
      onClick={() => router.push(`/news/${news.id}`)}
    >
      <div className="d-flex justify-content-md-start justify-content-between align-items-center">
        {/* <p className="noticeDate me-md-3 me-0">{notice.regDate}</p> */}
        <div className={styles.titles}>
          <p className={styles.noticeTitle}>
            {news.title}
            <NewLabel dateString={news.regDate} />
          </p>
          {news.subTitle && (
            <p className={`${styles.noticeSubtitle} mt-2`}>{news.subTitle}</p>
          )}
        </div>
      </div>
      <p className={styles.noticeMore}>
        查看更多<span className="material-icons ms-1">arrow_circle_right</span>
      </p>
    </div>
  );
};

export default News;
