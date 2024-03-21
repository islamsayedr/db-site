import Btn from "./Btn";
import Styles from "./FAQ.module.css";
import { useEffect, useState } from "react";
export default function FAQ({ baseURL }) {
  const [qus, setQus] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${baseURL}/api/faqs?populate=*`);
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
        {loading && (
          <>
            <img
              className={Styles.webSkelton}
              src="./imgs/faqweb.svg"
            />
            <img
              className={Styles.mobSkelton}
              src="./imgs/faqmob.svg"
            />
          </>
        )}
        {error && <p>Error: {error}</p>}
        {!loading && !error && (
          <div className={Styles.cards}>
            {qus.filter(article => article.attributes.cate === 'general').map((article) => {
              const id = article.id;
              const qs = article.attributes.qs;
              const answer = article.attributes.answer;
              
              return (
                <Qs
                    key={id}
                  qs={qs}
                  answer={answer}
                />
              );
            })}
          </div>
        )}
        <Btn text="عرض المزيد" to="faqs" type="wbg" />
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
