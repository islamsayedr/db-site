import { useEffect, useState } from "react";
import Styles from "./Review.module.css";

export default function Review({ baseURL }) {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${baseURL}/api/rev`);
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        setReviews(data.data);
        console.log(reviews);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
  },[]);

  const review = reviews[current];

  if (loading) {
    return <div>Loading...</div>; // You can replace this with a loading spinner component
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const totalReviews = reviews.length;

  return (
    <section className={Styles.sec}>
      <div className={`secContainer ${Styles.container}`}>
        {/* prev btn */}
        <span
          className={Styles.prev}
          onClick={() =>
            setCurrent((current - 1 + totalReviews) % totalReviews)
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="49"
            viewBox="0 0 48 49"
            fill="none"
          >
            <path
              d="M0 24.5C0 11.2452 10.7452 0.5 24 0.5C37.2548 0.5 48 11.2452 48 24.5C48 37.7548 37.2548 48.5 24 48.5C10.7452 48.5 0 37.7548 0 24.5Z"
              fill="#202026"
              fillOpacity="0.32"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M30.1898 21.6885L17.1104 14.5C17.1104 18.0427 19.0397 21.304 22.1431 23.0067L24.9034 24.5247L24.6217 24.682L22.102 26.0688C19.0212 27.7636 17.113 30.9942 17.1105 34.5L30.1625 27.4351L30.1774 27.4252L30.183 27.4282C30.6842 27.1536 31 26.6249 31 26.0551V23.0547C31 22.4849 30.691 21.9631 30.1898 21.6885Z"
              fill="white"
            />
          </svg>
        </span>

        <div className={Styles.main}>
          <div className={Styles.body}>
            <p>{review.attributes.comment}</p>
            <div className={Styles.client}>
              <span className={Styles.name}>{review.attributes.client}</span>|
              <span className={Styles.title}>{review.attributes.title}</span>
            </div>
            <img
              src="./icons/qRight.svg"
              alt="quote icon"
              className={Styles.right}
            />
            <img
              src="./icons/qLeft.svg"
              alt="quote icon"
              className={Styles.left}
            />
          </div>
          <div className={Styles.indicator}>
            {reviews.map((_, index) => (
              <span
                key={index}
                className={`${Styles.point} ${
                  index === current ? Styles.active : ""
                }`}
              ></span>
            ))}
          </div>
        </div>

        {/* next btn */}
        <span
          className={Styles.next}
          onClick={() => setCurrent((current + 1) % totalReviews)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="49"
            viewBox="0 0 48 49"
            fill="none"
          >
            <path
              d="M0 24.5C0 11.2452 10.7452 0.5 24 0.5C37.2548 0.5 48 11.2452 48 24.5C48 37.7548 37.2548 48.5 24 48.5C10.7452 48.5 0 37.7548 0 24.5Z"
              fill="#049DD9"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.8102 21.6885L30.8896 14.5C30.8896 18.0427 28.9603 21.304 25.8569 23.0067L23.0966 24.5247L23.3783 24.682L25.898 26.0688C28.9788 27.7636 30.887 30.9942 30.8895 34.5L17.8375 27.4351L17.8226 27.4252L17.817 27.4282C17.3158 27.1536 17 26.6249 17 26.0551V23.0547C17 22.4849 17.309 21.9631 17.8102 21.6885Z"
              fill="white"
            />
          </svg>
        </span>
      </div>
    </section>
  );
}
