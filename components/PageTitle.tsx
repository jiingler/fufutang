import * as React from "react";
import styles from "@/styles/modules/pageTitle.module.scss";
type PageTitleProps = {
  text: string;
};

const PageTitle: React.FC<PageTitleProps> = ({ text }) => {
  return (
    <>
      <div className={styles.pageBg}>
        <h2 className={styles.pageTitle}>{text}</h2>
        <div className={styles.pageBgOverlay}></div>
      </div>
    </>
  );
};

export default PageTitle;
