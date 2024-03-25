import Styles from "./Services.module.css";
import ServiceCard from "../comp/ServiceCard";

export default function Services() {
  return (
    <section className={Styles.whydb}>
      <div className={`secContainer ${Styles.container}`}>
        <div className={Styles.title}>
          <img src="./assets/dotIcon.svg" alt="dotIcon" />
          <h2>خدماتنا</h2>
        </div>
        <p>نقدم خدمة متكاملة من التصميم الى البرمجة والاستضافة</p>
        <div className={Styles.cards}>
          <ServiceCard
            icon="./assets/design.svg"
            title="تصميم الهوية البصرية"
            des=" هدفنا هو خلق هوية تعبيرية تعكس قيم ورؤية عملك بشكل جاذب واحترافي. بفضل هذه الهوية البصرية المميزة، ستكون قادرًا على بناء الثقة لدى جمهورك وتعزيز التعرف على علامتك التجارية بسهولة، مما يساهم في نجاح عملك ونموه."
          />
          <ServiceCard
            icon="./assets/web.svg"
            title="تصميم وبرمجة المواقع"
            des=" هدفنا هو خلق هوية تعبيرية تعكس قيم ورؤية عملك بشكل جاذب واحترافي. بفضل هذه الهوية البصرية المميزة، ستكون قادرًا على بناء الثقة لدى جمهورك وتعزيز التعرف على علامتك التجارية بسهولة، مما يساهم في نجاح عملك ونموه."
          />

          <ServiceCard
            icon="./assets/mob.svg"
            title="تصميم وبرمجة التطبيقات"
            des=" هدفنا هو خلق هوية تعبيرية تعكس قيم ورؤية عملك بشكل جاذب واحترافي. بفضل هذه الهوية البصرية المميزة، ستكون قادرًا على بناء الثقة لدى جمهورك وتعزيز التعرف على علامتك التجارية بسهولة، مما يساهم في نجاح عملك ونموه."
          />
        </div>
      </div>
    </section>
  );
}
