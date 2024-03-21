import Btn from "./Btn";
import Styles from "./Hero.module.css";
export default function Hero() {
  return (
    <section className={Styles.hero}>
      <div className={`secContainer ${Styles.container}`}>
        <div className={Styles.content}>
          <img src="./assets/heroTitle.svg" alt="شريكك التقنى" />
          <p>
            هل أنت ريادي أعمال غير تقني تبحث عن من يتكفل بالجانب التقني لمنشأتك
            ليزيل عنك الصعوبات التقنية؟ في صناع الأحلام سنكرس خبراتنا التقنية
            ونقوم بتوفير كل ما تحتاجه لنضمن لك النجاح التقني
          </p>
        </div>
        <Btn text="عرض الباقات" to="prices" type="bp" />
      </div>
      <video
        className={Styles.heroVideo}
        src="./assets/heroVideo.webm"
        loop
        muted
        autoPlay
      ></video>
    </section>
  );
}
