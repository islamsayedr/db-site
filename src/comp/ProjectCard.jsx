import Styles from "./ProjectCard.module.css";

export default function ProjectCard({cover, logo, title, des, tags, dir}) {
  var cardStyle = {}
  var infoStyle = {}
  if(dir === "left"){
      cardStyle = {
      direction: "ltr"
    }
    infoStyle = {
      textAlign: "left"
    }
  }

  return (
    <div className={Styles.card} style={cardStyle}>
      <div className={Styles.cover}>
        <div className={Styles.imgContaner}>
        <img src={cover} alt="prject cover" />
        </div>
        <div className={Styles.indicator}>
          <span className={Styles.dot}></span>
          <span className={Styles.dot}></span>
        </div>
        <div className={Styles.actions}>
          <div className={Styles.next}></div>
          <div className={Styles.prev}></div>
        </div>
      </div>
      <div className={Styles.info} style={infoStyle}>
        <img src={logo} alt="business logo" className={Styles.logo} />
        <h3>{title}</h3>
        <p>
          {des}
        </p>
        <div className={Styles.tagContainer}>
          {tags.map((tag)=>{
              return <span className={Styles.tag} key={tag}>{tag}</span>
          }
          )}
        </div>
      </div>
    </div>
  );
}
