import { useState } from "react";

import Styles from "./AboutCard.module.css";

export default function AboutCard({ title, des }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };
  var imageSrc = "./assets/bgObject02Hover.svg";
  var cardStyle = {};

  if (isHovered) {
    imageSrc = "./assets/bgObject02Hover.svg";
    cardStyle = { boxShadow: "var(--mainShadow)", borderColor: "var(--brandLight)"};
  } else {
    imageSrc = "./assets/bgObject02Normal.svg";
  }

  return (
    <div
      className={Styles.card}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      style={cardStyle}
    >
      <span className={Styles.icon}></span>
      <div className={Styles.body}>
        <h3>{title}</h3>
        <p>{des}</p>
      </div>
      <img className={Styles.bgObject02} src={imageSrc} alt="bg art" />
    </div>
  );
}
