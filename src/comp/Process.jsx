import Styles from "./Process.module.css";
import ProcessCard from "./ProcessCard";

export default function Process() {
  return (
    <section>
      <div className={`secContainer ${Styles.container}`}>
        <div className={Styles.title}>
          <img src="./assets/dotIcon.svg" alt="dotIcon" />
          <h2>كيف يتم الامر؟</h2>
        </div>
        <div className={Styles.cards}>
          <ProcessCard
            icon="./assets/apply.svg"
            title="قدم طلب شراكة"
            des="Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam mauris sed ma"
            order="first"
          />
          <span className={Styles.arrow}>
            <img src="./assets/arrow.svg" alt="arrow" />
          </span>
          <ProcessCard
            icon="./assets/review.svg"
            title="مراجعة الطلب"
            des="Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam mauris sed ma"
          />
          <span className={Styles.arrow}>
            <img src="./assets/arrow.svg" alt="arrow" />
          </span>
          <ProcessCard
            icon="./assets/meeting.svg"
            title=" مقابلة شخصية "
            des="Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam mauris sed ma"
          />
          <span className={Styles.arrow}>
            <img src="./assets/arrow.svg" alt="arrow" />
          </span>
          <ProcessCard
            icon="./assets/contarct.svg"
            title="توقيع العقد"
            des="Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam mauris sed ma"
          />
        </div>
      </div>
    </section>
  );
}
