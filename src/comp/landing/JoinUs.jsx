import Btn from "../shared/Btn";
import Styles from "./JoinUs.module.css";
export default function JoinUs() {
  return (
    <section className={Styles.sec}>
      <div className={`secContainer ${Styles.container}`}>
        <div className={Styles.content}>
          <h2>احصل على العرض المناسب لك</h2>
          <p>
            لست بحاجة أن تكون ملماً بالتقنية لنجاح منتجك التقني أنت فقط بحاجة
            لشريك تقني تثق به! تواصل معنا الآن لدراسة مشروعك وتقديم العرض
            المناسب لك
          </p>
        </div>
        <Btn text="قدم طلب الان" to="apply" type="bp" />
      </div>
      <img className={Styles.bg} src="./imgs/secbg.png"></img>
    </section>
  );
}
