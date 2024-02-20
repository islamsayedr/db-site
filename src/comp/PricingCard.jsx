import Styles from "./PricingCard.module.css";
import Btn from "./Btn";

export default function PricingCard({ title, sub, points, type }) {
  var cardStyle = {};
  var btnType = "";
  if (type === "main") {
    cardStyle = {
      padding: "56px",
      backgroundColor: "var(--brandDark)",
      color: "var(--white)",
      flex: "1.5",
      boxShadow: "var(--mainShadow)",
    };
    btnType = "p";
  } else {
    cardStyle = {
      height: "fit-content",
    };
    btnType = "wbg";
  }

  return (
    <div className={Styles.card} style={cardStyle}>
      <div className={Styles.head}>
        <span>{sub}</span>
        <h3>{title}</h3>
      </div>
      <div className={Styles.body}>
        {points.map((point) => {
          return (
            <div className={Styles.point} key={point}>
              <img src="./icons/check.svg" alt="check icon" />
              <span>{point}</span>
            </div>
          );
        })}
      </div>
      <Btn text="ابدأ الان" to="apply" type={btnType} />
    </div>
  );
}
