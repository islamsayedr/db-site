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
          نحل مشكلة ريادي الأعمال الغير التقنيين الذين بحاجة إلى شريك تقني يثقون
          به ليدير لهم الجانب التقني من منشأتهم دون الحاجة للقلق أو التدخل منهم
        </p>
        <div className={Styles.cards}>
          <div className={Styles.row}>
            <WhydbCard
              icon="./icons/invest.svg"
              iconHoverd="./icons/investHoverd.svg"
              title="شريك ملتزم معك "
              des="نحن شركاؤك في منشأتك لذلك نحن ملتزمون معك على المدى الطويل، ولن تركك وحدك."
            />
            <WhydbCard
              icon="./icons/expert.svg"
              iconHoverd="./icons/expertHoverd.svg"
              title="خبرة تقنية تفوق الـ ٢٥ سنة"
              des="تتميز إدارتنا التقنية بخبرة تفوق الـ ٢٥ سنة،  فمديرنا التنفيذي من أوائل الرياديين التقنين في المملكة منذ عام ٢٠٠٤"
            />
          </div>
          <div className={Styles.row}>
            <WhydbCard
              icon="./icons/dinger.svg"
              iconHoverd="./icons/dingerHoverd.svg"
              title="تقليل المخاطر"
              des="هل تعلم أن نسبة فشل المشاريع التقنية قد تصل إلى ٨٥٪ وذلك لقلة الخبرة التقنية. وجودك معنا سيساهم في تقليل المخاطر بشكل كبير."
            />
            <WhydbCard
              icon="./icons/direct.svg"
              iconHoverd="./icons/directHoverd.svg"
              title="التوجيه والإرشاد"
              des="نختصر عليك الوقت ونسخر خبراتنا من أجل توجيهك وإرشادك للطريق المناسب "
            />
          </div>
          <div className={Styles.row}>
            <WhydbCard
              icon="./icons/tech.svg"
              iconHoverd="./icons/techHoverd.svg"
              title="توفير الموارد التقنية المناسبة"
              des="نختار لك فريقاً ذا كفاءة عالية ونوفر لك الموارد التنقية اللازمة من أجل نجاحك"
            />
            <WhydbCard
              icon="./icons/stand.svg"
              iconHoverd="./icons/standHoverd.svg"
              title="استدامة المنتج "
              des="سنبني منتجك التقني على أسس سليمة لنضمن لك استدامة منتج التقني على المدى الطويل"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
