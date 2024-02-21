import { useEffect, useState } from "react";
import Styles from "./LatestArticles.module.css";
import ArticleCard from "./ArticleCard";
import { Link } from "react-router-dom";

export default function LatestArticles({ baseURL }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${baseURL}/api/article?populate=*`);
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        setArticles(data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [baseURL]);

  return (
    <section className={Styles.sec}>
      <div className={`secContainer ${Styles.container}`}>
        <div className={Styles.title}>
          <img src="./assets/dotIcon.svg" alt="dotIcon" />
          <h2>احدث المقالات</h2>
        </div>
        <div className={Styles.cardSection}>
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}
          {!loading && !error && (
            <div className={Styles.cardsContainer}>
              {articles.slice(-8).map((article) => {
                const id = article.id;
                const cover = `${baseURL}${article.attributes.cover.data.attributes.url}`;
                const title = article.attributes.title;
                const date = new Date(article.attributes.createdAt).toLocaleDateString('ar-EG');
                return (
                <Link to={`/blogs/${id}`} key={id} className={Styles.article}>
                  <ArticleCard
                    key={id}
                    cover={cover}
                    title={title}
                    date={date}
                  />
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
