import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Styles from "./ArticleDetails.module.css";
import ReactMarkdown from "react-markdown";

export default function ArticleDetails({ baseURL }) {
  const { id } = useParams();
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${baseURL}/api/article/${id}?populate=*`);
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const resp = await res.json();
        setArticle(resp.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [baseURL]);

  const goBack = () => {
    navigate(-1);
  };
  return (
    <section className={Styles.sec}>
      <div className={`secContainer ${Styles.container}`}>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {!loading && !error && (
          <>
            <img
              src={`${baseURL}${article.attributes.cover.data.attributes.url}`}
              alt=""
              className={Styles.img}
            />
            <span onClick={goBack} className={Styles.back}>
              رجوع
            </span>
            <h1 className={Styles.title}>{article.attributes.title}</h1>
            <span>
              {new Date(article.attributes.createdAt).toLocaleDateString(
                "ar-EG"
              )}
            </span>
            <p className={Styles.body}>
              <ReactMarkdown>{article.attributes.body}</ReactMarkdown>
            </p>
          </>
        )}
      </div>
    </section>
  );
}
