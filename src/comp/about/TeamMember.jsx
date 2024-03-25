import { useState } from "react";
import Styles from "./TeamMember.module.css";
export default function TeamMember({name, title, about, photo}) {
  const [flip, setFilp] = useState(false);

  function handleFlip() {
    setFilp(!flip);
  }
  function handleFlipBack() {
    setFilp(!flip);
  }
  const frontStyles = flip
    ? {
        transform: "rotateY(180deg)",
        zIndex: "-1",
      }
    : {};

  const backStyles = flip
    ? {
        transform: "rotateY(0deg)", // Adjust the rotation as needed
        zIndex: "1",
      }
    : {};
  return (
    <div
      className={Styles.card}
      onMouseEnter={handleFlip}
      onMouseLeave={handleFlipBack}
    >
      <div className={Styles.front} style={frontStyles}>
        <div className={Styles.contaner}>
          <img src={photo} alt="" />
        </div>
      </div>
      <div className={Styles.back} style={backStyles}>
        <div className={Styles.contaner}>
          <div className={Styles.info}>
            <div>{name}</div>
            <span>{title}</span>
            <p>{about}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
