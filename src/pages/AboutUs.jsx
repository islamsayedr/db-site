import Styles from "./AboutUs.module.css";
import AboutCard from "../comp/AboutCard";
import TeamMember from "../comp/TeamMember";
import { useEffect, useState } from "react";

export default function AboutUs({ baseURL }) {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${baseURL}/api/team?populate=*`);
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        setTeam(data.data);
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
          <h2>من نحن؟</h2>
        </div>
        <p>
          نحن شركائك التقنيين نشيل عنك هم الجانب التقني كاملا من اعداد البيئه
          المناسبه ، الموارد والتطوير المستمر لمنتجتك التقني ونصبح السي تي او
          لشركتك. ركز على البزنس وخل التقنيه علينا.
        </p>
        <div className={Styles.cards}>
          <AboutCard
            title="هدفنا"
            des="نتعاون مع الشركات الناشئة في رحلتها نحو النجاح، نقدم دعمًا تقنيًا فريدًا يحول رؤيتهم إلى واقع."
          />
          <AboutCard
            title="رؤيتنا"
            des="تحرر رواد الأعمال من التعقيد التكنولوجي، ونمكنهم من قيادة بثقة رؤوية متجهة حيث يركزون على رحلتهم الفريدة."
          />

          <AboutCard
            title="ما يميزنا"
            des="نحن شركاء وليس مقدمي خدمات فقط، نشارك في المخاطر مع رائد الأعمال من خلال استثمارنا في مشروعه بنموذج العمل مقابل الحصة. يمتلك قادتنا أكثر من 25 عامًا من الخبرة في سوق التكنولوجيا."
          />
        </div>
        <div className={Styles.title}>
          <img src="./assets/dotIcon.svg" alt="dotIcon" />
          <h2>اعضاء الفريق </h2>
        </div>
        <p>
          يمتلك صانعى الاحلام فريق مميز ممن الموهوبين فى مجالات تكنولوجيا
          المعلومات تحب قيادة المهندس سمير الجيبان
        </p>

        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {!loading && !error && (
          <div className={Styles.team}>
            {team.slice(-8).map((member) => {
              const id = member.id;
              const name = member.attributes.name;
              const title = member.attributes.title;
              const about = member.attributes.about;
              const photo = `${baseURL}${member.attributes.photo.data.attributes.url}`;

              return (
                <TeamMember
                  key={id}
                  photo={photo}
                  name={name}
                  title={title}
                  about={about}
                />
              );
            })}
          </div>
        )}
      </div>
      <img
        className={Styles.bgObject01}
        src="./assets/bgObject01.svg"
        alt="bg art"
      />
    </section>
  );
}
