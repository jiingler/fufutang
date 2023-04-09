type ArticleProps = {
  article: Article;
};

const Article: React.FC<ArticleProps> = ({ article }) => {
  const pubDate = new Date(article?.pubDate);
  const pubDateY = pubDate.getFullYear();
  const pubDateM = pubDate.getMonth() + 1;
  const pubDateD = pubDate.getDate();
  return (
    <div className="col-lg-6 col-12 ">
      <div className="article-info mb-2">
        <p>{article?.siteName}</p>
        <p>{`${pubDateY}/${pubDateM}/${pubDateD}`}</p>
      </div>
      <div className="article">
        <a href={article?.url} target="_blank" rel="noreferrer">
          <div className="image-container">
            <img src={article?.image} alt={article?.title} />
          </div>
          <div className="article-title">
            <h3>{article?.title}</h3>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Article;
