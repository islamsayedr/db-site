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
            title="قدم طلبك"
            des="قم بتعبئة نموذج الطلب في الأسفل بجميع التفاصيل التي تريد مشاركتها معنا"
            order="first"
          />
          <span className={Styles.arrow}>
            <img src="./assets/arrow.svg" alt="arrow" />
          </span>
          <ProcessCard
            icon="./assets/review.svg"
            title="مراجعة الطلب"
            des="سنقوم بمراجعة طلبك وتقييمه ثم سيتم الرد عليك خلال ٤٨ ساعة "
          />
          <span className={Styles.arrow}>
            <img src="./assets/arrow.svg" alt="arrow" />
          </span>
          <ProcessCard
            icon="./assets/meeting.svg"
            title="لقاء لمناقشة المشروع"
            des="سنتواصل معك لترتيب لقاء يتم التعرف فيه أكثر على مشروعك والإجابة على أسئلتك "
          />
          <span className={Styles.arrow}>
            <img src="./assets/arrow.svg" alt="arrow" />
          </span>
          <ProcessCard
            icon="./assets/contarct.svg"
            title="إحصل على عرضك"
            des="في حال الإتفاق المبدئي بعد اللقاء سيتم إرسال العرض المناسب لكم "
          />
        </div>
      </div>
    </section>
  );
}
