import Styles from "./NoPage.module.css";
import Btn from "../comp/Btn";

export default function NoPage() {
  return (
    <section className={Styles.container}>
      <img src="./imgs/404.svg" alt="" />
      <span>عذرا, لا يوجد صفحة بهذا الاسم</span>
      <Btn text="العودة للصفحة الرئيسية" to="/" type="wbg" />

    </section>
  );
}
