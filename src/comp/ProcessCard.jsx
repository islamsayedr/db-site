import Styles from "./ProcessCard.module.css";
import Btn from "./Btn";
import { useState } from "react";

export default function ProcessCard({ title, des, icon, order }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };
  var cardStyle = {};
  var pStyle = {};
  var btnStyle = {};
  if (order === "first" && isHovered) {
    cardStyle = {
      alignItem: "center",
      border: "1px solid var(--brandMain)",
      boxShadow: "var(--mainShadow)",
    };
    pStyle = { display: "none" };
    btnStyle = { display: "inline" };
  }
  return (
    <div
      className={`${Styles.card} card`}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      style={cardStyle}
    >
      <span className={Styles.icon}>
        <img src={icon} alt="icon" />
      </span>
      <div className={Styles.body}>
        <h3>{title}</h3>
        <p style={pStyle}>{des}</p>
        <div className={Styles.btn} style={btnStyle}>
          <Btn text="ابدأ الان" to="/apply" type="p" />
        </div>
      </div>
    </div>
  );
}
