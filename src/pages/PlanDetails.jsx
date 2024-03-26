import { useParams, useNavigate } from "react-router-dom";
import Styles from "./PlanDetails.module.css";
import PricingCard from "../comp/pricing/PricingCard";
import Qs from "../comp/about/Qs.jsx";
import { useEffect, useState } from "react";
import Dialog from "../comp/shared/Dialog.jsx";

export default function PlanDetails({ baseURL }) {
  const [qus, setQus] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // fetch faqs
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
  // handle navigation
  const { plan } = useParams();
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  //handle dialog
  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const handleConfirm = () => {
    if (plan === "ownership") {
      navigate("/ApplyForOwnerShip");
    }else if (plan === "service") {
      navigate("/ApplyForService");
    } 
    else {
      closeDialog();
    }
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
              des="هي عملية شراكة كاملة تتم بين صانعي الأحلام والريادي بموجبها تصبح صانعي الأحلام شريك تقني في الشركة الناشئة. تكون هذه الشراكة محددة النسبة في لحظة التوقيع يحصل بموجها الريادي على شريك تقني مسؤول على الإدارة التقنية بالكامل. بالإضافة إلى مشاركة قدرها 50% من التكاليف عن طريق فريق صانعي الأحلام (تدفع عن طريق التطوير والتشغيل) ويستمر هذا التخفيض لمدة سنة حيث نتوقع وصول الشركة الجديدة لمرحلة قادرة على تحمل تكاليفها."
              points={[
                "مدير تقني تنفيذي",
                "تطوير المنتج الأولي خلال ٢-٤ شهور",
                "موقع ويب للشركة مع صفحة هبوط للمنتج",
                "إنشاء وإدارة البريد الإلكتروني وربطه بنطاق المنشأة",
                "دعم تقني وصيانة",
                "نسبة أسهم مناسبة",
                "تحمل ٥٠٪ من التكاليف لمدة سنة",
              ]}
              actionName="قدم الآن"
              onClick={openDialog}
            />
          ) : (
            <PricingCard
              title="باقة الشراكة التقنية كخدمة"
              sub="عقد سنوي او نصف سنوى"
              des="هي خدمة لتقديم جميع ما يقدمه الشريك التقني لشركتك الناشئة بمقابل شهري وبعقد 6 شهور أو سنة. هذه الباقة تقدم لمن لا نستطيع عمل الشراكة التامة معه مثل تلك المذكورة في باقة الشراكة مقابل ملكية بسبب عدم وصول الفكرة أو المنتج إلى مرحلة التأكد من الفكرة (Validated Idea)."
              points={[
                "مدير تقني تنفيذي",
                "تطوير المنتج الأولي خلال ٢-٤ شهور",
                "موقع ويب للشركة مع صفحة هبوط للمنتج",
                "إنشاء وإدارة البريد الإلكتروني وربطه بنطاق المنشأة",
                "دعم تقني وصيانة",
                "سعر شهري منافس",
                "إمكانية التحول إلى شريك تقني كامل بعد التحقق من الفكرة/المنتج",
              ]}
              actionName="قدم الآن"
              onClick={openDialog}
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
              .filter((question) => question.attributes.cate === plan)
              .map((question) => {
                const id = question.id;
                const qs = question.attributes.qs;
                const answer = question.attributes.answer;
                return <Qs key={id} qs={qs} answer={answer} />;
              })}
          </div>
        )}
      </div>
      <Dialog
        isOpen={isDialogOpen}
        title="هل قمت بقرائة الاسئلة المتكررة؟"
        message="الرجاء قرائة الاسئلة المتكررة قبل المتابعة"
        onClose={closeDialog}
        onConfirm={handleConfirm}
      />
    </section>
  );
}
