import Styles from "./PricingCard.module.css";
import Btn from "../shared/Btn";

export default function PricingCard({
  title,
  sub,
  points,
  action,
  actionName,
  des,
  onClick,
}) {
  if (!points || !Array.isArray(points)) {
    return null; // or handle the case where points is not valid
  }
  return (
    <div className={Styles.card}>
      <div className={Styles.head}>
        <span>{sub}</span>
        <h3>{title}</h3>
      </div>
      {des && <p>{des}</p>}
      <div className={Styles.body}>
        {points.map((point) => {
          return (
            <div className={Styles.point} key={point}>
              <img src="/icons/check.svg" alt="check icon" />
              <span>{point}</span>
            </div>
          );
        })}
      </div>
      
      <Btn text={actionName} to={action} onClick={onClick} type="wbg" />
    </div>
  );
}
