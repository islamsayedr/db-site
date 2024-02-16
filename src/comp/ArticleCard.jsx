import Styles from "./ArticleCard.module.css";

export default function ArticleCard({ title, date, cover }) {
  return (
    <div className={Styles.card} >
      <div className={Styles.cover}>
        <div className={Styles.imgContaner}>
          <img src={cover} alt="prject cover" />
        </div>
      </div>
      <div className={Styles.body}>
        <span style={Styles.date}>{date}</span>
        <h3>{title}</h3>
      </div>
    </div>
  );
}
