import Styles from "./Whydb.module.css";
import WhydbCard from "./WhydbCard";

export default function Whydb() {
  return (
    <section className={Styles.whydb}>
      <div className={`secContainer ${Styles.container}`}>
        <div className={Styles.title}>
          <img src="./assets/dotIcon.svg" alt="dotIcon" />
          <h2>لماذا صانعى الاحلام؟</h2>
        </div>
        <p>
          نحل مشكلة رياديين الأعمال الذين يفتقرون للجانب التقني ويحتاجون شريك
          يثقون فيه ليدير لهم الجانب التقني من الشركه بحيث ما يشيلون هم الجانب
          التقني ابدا.
        </p>
        <div className={Styles.cards}>
          <div className={Styles.row}>
            <WhydbCard
              icon="./assets/dotIcon.svg"
              title="احصل على المستثمر الأول حتى قبل أن تبدأ"
              des="سوف تنضم شركة صانعى الاحلام إلى رحلتك الناشئة لتصبح المستثمر الأول في شركتك الناشئة, حتى قبل أن تبدأ."
            />
            <WhydbCard
              icon="./assets/dotIcon.svg"
              title="امتلك فريقك الفني الكامل"
              des="امتلك فريقك الخاص لدعم شركتك الناشئة المتنامية في جميع المجالات التقنية مثل التطوير والبنية التحتية والتسويق الرقمي ..الخ."
            />
          </div>
          <div className={Styles.row}>
            <WhydbCard
              icon="./assets/dotIcon.svg"
              title="وفر جميع تكاليف الأجهزة والبرامج الخاصة بك"
              des="العمل مع صانعى الاحلام يوفر عليك تكاليف الأدوات والأجهزة التقنية
التى سوف تحتاج. ,نحن نقدم لك منتج جاهز للاستخدام."
            />
            <WhydbCard
              icon="./assets/dotIcon.svg"
              title="الإرشاد من القادة ذوي الخبرة والناجحين "
              des="قادة ذوو خبرة لتوجيهك في جميع جوانب مجال بدء التشغيل والتأكد من ذلك, لديك عمل ناجح."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
