import styles from "./Btn.module.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Btn = ({ text, type, to, onClick }) => {
  return (
    <Link to={to} onClick={onClick}>
      <div className={`${styles.btn} ${type}`}>{text}</div>
    </Link>
  );
};

Btn.propTypes = {
  text: PropTypes.any,
  type: PropTypes.any,
  to: PropTypes.any,
};

export default Btn;
