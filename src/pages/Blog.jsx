import { useEffect, useState } from "react";
import Styles from "./Blog.module.css";
import ArticleCard from "../comp/ArticleCard";
import { Link } from "react-router-dom";

export default function Blog({ baseURL }) {
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
          <h2>المدونة</h2>
        </div>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {!loading && !error && (
          <div className={Styles.cardSection}>
            {articles.map((article) => {
              const id = article.id;
              const cover = `${baseURL}${article.attributes.cover.data.attributes.url}`;
              const title = article.attributes.title;
              const date = new Date(
                article.attributes.createdAt
              ).toLocaleDateString("ar-EG");
              return (
                <Link to={`/blogs/${id}`} key={id} className={Styles.article}>
                  <ArticleCard cover={cover} title={title} date={date} />
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
