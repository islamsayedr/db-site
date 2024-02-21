import { useState } from "react";
import Styles from "./WhydbCard.module.css";

export default function WhydbCard({ title, des, icon }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };
  var cardStyle = {};

  if (isHovered) {
    cardStyle = {
      boxShadow: "var(--mainShadow)",
      borderColor: "var(--brandLight)",
    };
  }

  return (
    <div
      className={Styles.card}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      style={cardStyle}
    >
      <span className={Styles.icon}>
        <img src={icon} alt="icon" />
      </span>
      <div className={Styles.body}>
        <h3>{title}</h3>
        <p>{des}</p>
      </div>
    </div>
  );
}
