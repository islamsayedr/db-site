import Btn from "./Btn";
import Styles from "./JoinUs.module.css";
export default function JoinUs() {
  return (
    <section className={Styles.sec}>
      <div className={`secContainer ${Styles.container}`}>
        <div className={Styles.content}>
          <h2>انضم لقائمة شركائنا</h2>
          <p>
            نحل مشكلة رياديين الأعمال الذين يفتقرون للجانب التقني ويحتاجون شريك
            يثقون فيه ليدير لهم الجانب التقني من الشركه بحيث ما يشيلون هم الجانب
            التقني ابدا.
          </p>
        </div>
        <Btn text="قدم طلب الان" />
      </div>
      <img
        className={Styles.bg}
        src="./imgs/secbg.png"
      ></img>
    </section>
  );
}
