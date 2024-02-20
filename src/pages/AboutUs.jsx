import Styles from "./AboutUs.module.css";
import AboutCard from "../comp/AboutCard";

export default function AboutUs() {
  return (
    <section className={Styles.whydb}>
      <div className={`secContainer ${Styles.container}`}>
        <div className={Styles.title}>
          <img src="./assets/dotIcon.svg" alt="dotIcon" />
          <h2>من نحن؟</h2>
        </div>
        <p>
          نحن شركائك التقنيين نشيل عنك هم الجانب التقني كاملا من اعداد البيئه
          المناسبه ، الموارد والتطوير المستمر لمنتجتك التقني ونصبح السي تي او
          لشركتك. ركز على البزنس وخل التقنيه علينا.
        </p>
        <div className={Styles.cards}>
          <AboutCard
            title="هدفنا"
            des="نتعاون مع الشركات الناشئة في رحلتها نحو النجاح، نقدم دعمًا تقنيًا فريدًا يحول رؤيتهم إلى واقع."
          />
          <AboutCard
            title="رؤيتنا"
            des="تحرر رواد الأعمال من التعقيد التكنولوجي، ونمكنهم من قيادة بثقة رؤوية متجهة حيث يركزون على رحلتهم الفريدة."
          />

          <AboutCard
            title="ما يميزنا"
            des="نحن شركاء وليس مقدمي خدمات فقط، نشارك في المخاطر مع رائد الأعمال من خلال استثمارنا في مشروعه بنموذج العمل مقابل الحصة. يمتلك قادتنا أكثر من 25 عامًا من الخبرة في سوق التكنولوجيا."
          />
        </div>
      </div>
      <img className={Styles.bgObject01} src="./assets/bgObject01.svg" alt="bg art" />
    </section>
  );
}
