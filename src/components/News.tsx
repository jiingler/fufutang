const News = () => {
  return (
    <div className="news bg-quaternary">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="image-container">
              <img
                src="https://images.unsplash.com/photo-1462573801284-2a90e879e12c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="最新消息"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="article position-relative">
              <p className="article-category mb-5">
                <span>最新消息</span>
              </p>
              <div className="article-inner-wrap">
                <h3 className="article-title fw-bold">文章標題文章標題文章標題</h3>
                <div className="article-info position-absolute">
                  <span className="me-4">2022/11/23 Wed.</span>
                  <span>瀏覽數： 10</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
