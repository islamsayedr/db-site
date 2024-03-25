import Styles from "./Status.module.css";
import Btn from "../../comp/shared/Btn";

export default function Status({ img, message, action }) {
  return (
    <section className={Styles.container}>
      <img src={img} alt="" />
      <span>{message}</span>
      <Btn text="العودة للصفحة الرئيسية" to={action} type="wbg" />
    </section>
  );
}
