import Styles from "./LatestProjects.module.css";
import ProjectCard from "./ProjectCard";

export default function LatestProjects() {
  return (
    <section>
      <div className={`secContainer ${Styles.container}`}>
        <div className={Styles.title}>
          <img src="./assets/dotIcon.svg" alt="dotIcon" />
          <h2>احدث المشاريع</h2>
        </div>
        <div className={Styles.cards}>
          <ProjectCard
            cover="./imgs/project.png"
            logo="./imgs/logo.png"
            title="بزنس كود"
            des="بزنس كود هو محفظة بطاقات الكترونية تضم انواع متعددة من البطاقات مثل
            بطاقات الاعمال, بطاقات المرور, بطاقات الهوية وغيرها من البطاقات"
            tags={["اعمال", "بطاقات عمل", "محفظة بطاقات"]}
            dir="right"
          />
          <ProjectCard
            cover="./imgs/project.png"
            logo="./imgs/logo.png"
            title="بزنس كود"
            des="بزنس كود هو محفظة بطاقات الكترونية تضم انواع متعددة من البطاقات مثل
            بطاقات الاعمال, بطاقات المرور, بطاقات الهوية وغيرها من البطاقات"
            tags={["اعمال", "بطاقات عمل", "محفظة بطاقات"]}
            dir="left"
          />
        </div>
      </div>
    </section>
  );
}
