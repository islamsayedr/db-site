import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Styles from "./PlanDetails.module.css";
import PricingCard from "../comp/PricingCard";

export default function PlanDetails() {
  const { plan } = useParams();
  const [currentPlan, setCurrentPlan] = useState({});

  useEffect(() => {
    if (plan === "cto") {
      setCurrentPlan({
        name: "title",
        points: ["heoo", "ojoko"],
      });
    }
  }, []);

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <section className={Styles.sec}>
      <div className={`secContainer ${Styles.container}`}>
        <span onClick={goBack} className={Styles.back}>
          رجوع
        </span>
        <PricingCard
          title="باقة الشراكة التقنية مع ملكية"
          sub="غير محدد"
          points={[
            "مدير تقني تنفيذي",
            "تطوير المنتج الأولي خلال ٢-٤ شهور",
            "موقع ويب للشركة مع صفحة هبوط للمنتج",
            "إنشاء وإدارة البريد الإلكتروني وربطه بنطاق المنشأة",
            "دعم تقني وصيانة",
            "ملكية بين ٢٠٪ و٢٥٪",
            "سعر تطوير مخفض بنسبة ٥٠٪",
          ]}
        />
      </div>
    </section>
  );
}
