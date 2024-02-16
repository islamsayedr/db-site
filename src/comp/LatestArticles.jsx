import Styles from "./LatestArticles.module.css";
import ArticleCard from "./ArticleCard";

export default function LatestArticles() {
  function drag() {}

  return (
    <section className={Styles.sec}>
      <div className={`secContainer ${Styles.container}`}>
        <div className={Styles.title}>
          <img src="./assets/dotIcon.svg" alt="dotIcon" />
          <h2>احدث المقالات</h2>
        </div>
        <div className={Styles.cardSection}>
          <div className={Styles.cardsContainer}>
            <ArticleCard
              cover="./imgs/article.png"
              title="قدم طلب شراكة"
              date="12/6/2023"
            />
            <ArticleCard
              cover="./imgs/article.png"
              title="مراجعة الطلب"
              date="12/6/2023"
            />
            <ArticleCard
              cover="./imgs/article.png"
              title="مراجعة الطلب"
              date="12/6/2023"
            />
            <ArticleCard
              cover="./imgs/article.png"
              title="مراجعة الطلب"
              date="12/6/2023"
            />
            <ArticleCard
              cover="./imgs/article.png"
              title="مراجعة الطلب"
              date="12/6/2023"
            />
            <ArticleCard
              cover="./imgs/article.png"
              title="مراجعة الطلب"
              date="12/6/2023"
            />
            <ArticleCard
              cover="./imgs/article.png"
              title="مراجعة الطلب"
              date="12/6/2023"
            />
            <ArticleCard
              cover="./imgs/article.png"
              title="مراجعة الطلب"
              date="12/6/2023"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
