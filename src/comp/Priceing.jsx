import Styles from "./Pricing.module.css";
import PricingCard from "./PricingCard";

export default function Pricing() {
  return (
    <section className={Styles.whydb}>
      <div className={`secContainer ${Styles.container}`}>
        <div className={Styles.title}>
          <img src="./assets/dotIcon.svg" alt="dotIcon" />
          <h2> بعض الأمثلة على تسعير المشاريع </h2>
        </div>
        <p>
          يقدم كل شريك مشروع متطلبات مميزة, ,لا يوجد اثنان متشابهان، مما يجعل من
          الصعب تقديم تقديرات دون تخطيط شامل. ,أدناه، نحن الخطوط العريضة لمختلف,
          استراتيجيات التنمية التي نستخدمها كأمثلة.
        </p>
        <div className={Styles.cards}>
          <PricingCard
            title="أعمال فى مراحل الانشاء"
            sub="نموذج مصغر"
            points={[
              " نحن ندير الفريق ",
              " تسليم MVP الأساسي ",
              " CTO بدوام جزئي ",
              "4-5 آلاف دولار و5-10% من الأسهم",
              " الأسهم التي تم تحديدها بشكل متبادل ",
            ]}
          />
          <PricingCard
            type="main"
            title="أعمال تم التحقق منها"
            sub="أعمال تم التحقق منها"
            points={[
              " نحن ندير الفريق ",
              " تسليم MVP الأساسي ",
              " CTO بدوام جزئي ",
              "4-5 آلاف دولار و5-10% من الأسهم",
              " الأسهم التي تم تحديدها بشكل متبادل ",
            ]}
          />
          <PricingCard
            title="أعمال فى مراحل النمو"
            sub="تطوير"
            points={[
              " نحن ندير الفريق ",
              " تسليم MVP الأساسي ",
              " CTO بدوام جزئي ",
              "4-5 آلاف دولار و5-10% من الأسهم",
              " الأسهم التي تم تحديدها بشكل متبادل ",
            ]}
          />
        </div>
      </div>
    </section>
  );
}
