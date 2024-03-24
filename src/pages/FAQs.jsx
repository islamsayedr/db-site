import Styles from "../comp/FAQ.module.css";
import { useEffect, useState } from "react";

export default function FAQs({ baseURL }) {
  const [qus, setQus] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${baseURL}/api/faqs??pagination[page]=1&pagination[pageSize]=50`);
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

  return (
    <section className={Styles.whydb}>
      <div className={`secContainer ${Styles.container}`}>
        <div className={Styles.title}>
          <img src="./assets/dotIcon.svg" alt="dotIcon" />
          <h2>الاسئلة المتكررة</h2>
        </div>
        <p>
          اليك اجابات على اكثر الاسئلة التى نتلقاها, فى حالة كان لديك اى تساؤل
          اخر لا تتردد فى التواصل معنا عبر الواتس اب.
        </p>
        {loading && (
          <>
            <img className={Styles.webSkelton} src="./imgs/faqweb.svg" />
            <img className={Styles.mobSkelton} src="./imgs/faqmob.svg" />
          </>
        )}
        {error && <p>Error: {error}</p>}
        {!loading && !error && (
          <>
            <h3 className={Styles.title}>الأسئلة العامة </h3>
            <div className={Styles.cards}>
              {qus
                .filter((article) => article.attributes.cate === "general")
                .map((article) => {
                  const id = article.id;
                  const qs = article.attributes.qs;
                  const answer = article.attributes.answer;

                  return <Qs key={id} qs={qs} answer={answer} />;
                })}
            </div>
            <h3 className={Styles.title}>أسئلة باقة الشراكة مع الملكية</h3>
            <div className={Styles.cards}>
              {qus
                .filter((article) => article.attributes.cate === "ownership")
                .map((article) => {
                  const id = article.id;
                  const qs = article.attributes.qs;
                  const answer = article.attributes.answer;

                  return <Qs key={id} qs={qs} answer={answer} />;
                })}
            </div>
            <h3 className={Styles.title}>أسئلة باقة الشراكة كخدمة</h3>
            <div className={Styles.cards}>
              {qus
                .filter((article) => article.attributes.cate === "service")
                .map((article) => {
                  const id = article.id;
                  const qs = article.attributes.qs;
                  const answer = article.attributes.answer;

                  return <Qs key={id} qs={qs} answer={answer} />;
                })}
            </div>
{/* 
            <h3 className={Styles.title}>أسئلة باقة المدير التقني التنفيذي</h3>
            <div className={Styles.cards}>
              {qus
                .filter((article) => article.attributes.cate === "sto")
                .map((article) => {
                  const id = article.id;
                  const qs = article.attributes.qs;
                  const answer = article.attributes.answer;

                  return <Qs key={id} qs={qs} answer={answer} />;
                })}
            </div>
            <h3 className={Styles.title}>أسئلة باقة التطوير والدعم</h3>
            <div className={Styles.cards}>
              {qus
                .filter((article) => article.attributes.cate === "support")
                .map((article) => {
                  const id = article.id;
                  const qs = article.attributes.qs;
                  const answer = article.attributes.answer;

                  return <Qs key={id} qs={qs} answer={answer} />;
                })}
            </div> */}
          </>
        )}
      </div>
    </section>
  );
}
function Qs({ qs, answer }) {
  const [open, setOpen] = useState(false);
  function handleOpen() {
    setOpen(!open);
  }
  const showAnswer = open ? { display: "flex" } : {};
  const rotateIcon = open
    ? { transform: "rotate(180deg)", color: "var(--brandMain)" }
    : {};
  const card = open
    ? { borderColor: "var(--brandMain)", boxShadow: "var(--mainShadow)" }
    : {};
  return (
    <div className={Styles.qsContainer} onClick={handleOpen} style={card}>
      <div className={Styles.qs}>
        <h3>{qs}</h3>
        <span style={rotateIcon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </span>
      </div>
      <p className={Styles.answer} style={showAnswer}>
        {answer}
      </p>
    </div>
  );
}
