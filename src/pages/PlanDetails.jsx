import { useParams, useNavigate } from "react-router-dom";
import Styles from "./PlanDetails.module.css";
import PricingCard from "../comp/PricingCard";
import Qs from "../comp/QS";
import { useEffect, useState } from "react";

export default function PlanDetails({ baseURL }) {
  const [qus, setQus] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${baseURL}/api/faqs??pagination[page]=1&pagination[pageSize]=50`
        );
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        setQus(data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [baseURL]);

  const { plan } = useParams();
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
        <div className={Styles.card}>
          {plan === "ownership" ? (
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
              action="/applyNow"
              actionName="اختر هذة الباقة"
            />
          ) : (
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
                "إمكانية الترقية إلى شريك بملكية بعد التحقق من الصحة",
              ]}
              action="/applyNow"
              actionName="اختر هذة الباقة"
            />
          )}
        </div>
        <h3>الاسئلة المتكررة</h3>
        {loading && (
          <>
            <img className={Styles.webSkelton} src="/imgs/faqweb.svg" />
            <img className={Styles.mobSkelton} src="/imgs/faqmob.svg" />
          </>
        )}
        {error && <p>Error: {error}</p>}
        {!loading && !error && (
          <div className={Styles.qs}>
            {qus
              .filter((article) => article.attributes.cate === plan)
              .map((article) => {
                const id = article.id;
                const qs = article.attributes.qs;
                const answer = article.attributes.answer;
                return <Qs key={id} qs={qs} answer={answer} />;
              })}
          </div>
        )}
      </div>
    </section>
  );
}
