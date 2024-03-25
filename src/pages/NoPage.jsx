import Styles from "./NoPage.module.css";
import Btn from "../comp/shared/Btn";

export default function NoPage() {
  return (
    <section className={Styles.container}>
      <img src="./imgs/404.svg" alt="" />
      <span>عذرا, هذة الصفحة غير متوفرة حاليا.</span>
      <Btn text="العودة للصفحة الرئيسية" to="/" type="wbg" />

    </section>
  );
}
