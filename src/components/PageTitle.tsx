import * as React from 'react';

type PageTitleProps = {
  text: string;
};

const PageTitle: React.FC<PageTitleProps> = ({ text }) => {
  return (
    <>
      <div className="pageBg">
        <h2 className="pageTitle">{text}</h2>
        <div className="pageBgOverlay"></div>
      </div>
    </>
  );
};

export default PageTitle;
