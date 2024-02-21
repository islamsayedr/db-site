import Btn from "./Btn";
import Styles from "./Hero.module.css";
export default function Hero() {
  return (
    <section className={Styles.hero}>
      <div className={`secContainer ${Styles.container}`}>
        <div className={Styles.content}>
          <img src="./assets/heroTitle.svg" alt="شريكك التقنى" />
          <p>
            نحن شركائك التقنيين نشيل عنك هم الجانب التقني كاملا من اعداد البيئه
            المناسبه ، الموارد والتطوير المستمر لمنتجتك التقني ونصبح السي تي او
            لشركتك. ركز على البزنس وخل التقنيه علينا.
          </p>
        </div>
        <Btn text="ابدأ الان" to="apply" type="bp"/>
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
