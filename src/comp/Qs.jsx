import Styles from "./FAQ.module.css";
import { useState } from "react";
export default function Qs({ qs, answer }) {
    const [open, setOpen] = useState(false);
    function handleOpen() {
      setOpen(!open);
    }
    const showAnswer = open ? { display: "flex" } : {};
    const rotateIcon = open
      ? { transform: "rotate(180deg)", color: "var(--brandMain)" }
      : {};
    const card = open
      ? { borderColor: "var(--brandMain)", boxShadow: "var(--mainShadow)" }
      : {};
    return (
      <div className={Styles.qsContainer} onClick={handleOpen} style={card}>
        <div className={Styles.qs}>
          <h3>{qs}</h3>
          <span style={rotateIcon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </div>
        <p className={Styles.answer} style={showAnswer}>
          {answer}
        </p>
      </div>
    );
  }
  