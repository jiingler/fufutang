import Image from "next/image";
import styles from "@/styles/modules/article.module.scss";
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
      <div className={`${styles.articleInfo} mb-2`}>
        <p>{article?.siteName}</p>
        <p>{`${pubDateY}/${pubDateM}/${pubDateD}`}</p>
      </div>
      <div className={styles.article}>
        <a href={article?.url} target="_blank" rel="noreferrer">
          <div className={styles.imageContainer}>
            <Image
              src={article?.image}
              alt={article?.title}
              width={800}
              height={800}
              sizes="(max-width: 100%)"
              priority={true}
              unoptimized
            />
          </div>
          <div className={styles.articleTitle}>
            <h3>{article?.title}</h3>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Article;
