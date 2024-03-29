import Styles from "./Pricing.module.css";
import PricingCard from "./PricingCard";

export default function Pricing() {
  return (
    <section className={Styles.whydb}>
      <div className={`secContainer ${Styles.container}`}>
        <div className={Styles.title}>
          <img src="./assets/dotIcon.svg" alt="dotIcon" />
          <h2> الباقات المتاحة</h2>
        </div>
        <p>
          يقدم كل شريك مشروع متطلبات مميزة, ,لا يوجد اثنان متشابهان، مما يجعل من
          الصعب تقديم تقديرات دون تخطيط شامل, ولكن اليك بعض الباقات التى يمكنك
          الاختيار منها ما يتناسب معك.
        </p>
        <div className={Styles.cardCont}>
          <div className={Styles.cards1}>
            <PricingCard
              title="باقة الشراكة التقنية مع ملكية"
              sub="غير محدد"
              points={[
                "مدير تقني تنفيذي",
                "تطوير المنتج الأولي خلال ٢-٤ شهور",
                "موقع ويب للشركة مع صفحة هبوط للمنتج",
                "إنشاء وإدارة البريد الإلكتروني وربطه بنطاق المنشأة",
                "دعم تقني وصيانة",
                "حصة أسهم مناسبة",
                "تحمل ٥٠٪ من التكاليف لمدة سنة",
              ]}
              action="/prices/ownership"
              actionName="قدم الآن"
            />
            <PricingCard
              title="باقة الشراكة التقنية كخدمة"
              sub="عقد سنوي او نصف سنوى"
              points={[
                "مدير تقني تنفيذي",
                "تطوير المنتج الأولي خلال ٢-٤ شهور",
                "موقع ويب للشركة مع صفحة هبوط للمنتج",
                "إنشاء وإدارة البريد الإلكتروني وربطه بنطاق المنشأة",
                "دعم تقني وصيانة",
                "سعر شهري منافس",
                "إمكانية التحول إلى شريك تقني كامل بعد التحقق من الفكرة/المنتج",
              ]}
              action="/prices/service/"
              actionName="قدم الآن"
            />
          </div>
          {/* <div className={Styles.cards2}>
            <PricingCard
              title="باقة التطوير والدعم"
              sub="عقد نصف سنوي"
              points={[
                "تطوير النظام",
                "دعم تقني وصيانة خلال مدة العقد",
                "السعر يحدد حسب المتطلبات",
              ]}
            />
            <PricingCard
              title="باقة المدير التقني التنفيذي (CTO)"
              sub="عقد شهرى"
              points={[
                " بقيادة سمير الجيبان بخبرة أكثر من 25 سنة",
                " ادارة شاملة واستشارات",
                " سعر بالساعة حسب الحاجة ",
              ]}
            />
          </div> */}
        </div>
      </div>
    </section>
  );
}
