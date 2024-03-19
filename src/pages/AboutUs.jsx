import Styles from "./AboutUs.module.css";
import AboutCard from "../comp/AboutCard";
// import TeamMember from "../comp/TeamMember";
// import { useEffect, useState } from "react";

export default function AboutUs({ baseURL }) {
  // const [team, setTeam] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await fetch(`${baseURL}/api/team?populate=*`);
  //       if (!res.ok) {
  //         throw new Error(`HTTP error! Status: ${res.status}`);
  //       }
  //       const data = await res.json();
  //       setTeam(data.data);
  //     } catch (error) {
  //       setError(error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, [baseURL]);

  return (
    <section className={Styles.whydb}>
      <div className={`secContainer ${Styles.container}`}>
        <div className={Styles.title}>
          <img src="./assets/dotIcon.svg" alt="dotIcon" />
          <h2>من نحن؟</h2>
        </div>
        {/* <p>
          نحن شركائك التقنيين نشيل عنك هم الجانب التقني كاملا من اعداد البيئه
          المناسبه ، الموارد والتطوير المستمر لمنتجتك التقني ونصبح السي تي او
          لشركتك. ركز على البزنس وخل التقنيه علينا.
        </p> */}
        <div className={Styles.cards}>
          <AboutCard
            title="رسالتنا"
            des="نتعاون مع الشركات الناشئة في رحلتها نحو النجاح، حيث نقدم دعمًا تقنيًا لا مثيل له ليحول رؤيتهم إلى واقع."
          />
          <AboutCard
            title="رؤيتنا"
            des="تحرير رواد الأعمال من التعقيد التقني، وتمكينهم من القيادة بثقة بالتركيز على رحلتهم الفريدة."
          />

          <AboutCard
            title="ما يميزنا"
            des="نحن شركاء لا مقدمو خدمات فقط، نتكفل بإدارة المنتج التقني بالكامل ونتقاسم المخاطر مع رائد الأعمال من خلال نموذج عملنا المرن حيث سيتم العمل مقابل مزيج بين تكاليف تطوير مخفضة وحصة ملكية. نفتخر بكون قادتنا أحد أكبر المؤثرين في القطاع التقني بالمملكة، حيث يملك قادتنا أكثر من ٢٥ عامًا من الخبرة في مجال التقنية ومن أوائل من بدأ في الحراك التقني بالمملكة في عام ٢٠٠٤."
          />
        </div>
        <div className={Styles.samir}>
          <img src="./imgs/samir.png" alt="samir aljaiban" />
          <div className={Styles.about}>
            <h2>سمير الجيبان </h2>
            <span>المؤسس والمدير التنفيذي</span>
            <p>
              بدأت قصة سمير الجيبان مع التقنية منذ صغره، إذ كان مولعًا بالتقنية
              في فترة كانت فيها التقنية شبه معدومة. انغمس في عالم التقنية عندما
              اشترى له والده جهاز صخر، وهو جهاز متطور في ذلك الوقت، مما أثار
              اهتمامه وولعه بالتكنولوجيا وتعلم لغات البرمجة الرائجة في ذلك الوقت
              مثل لغة بيسك.
            </p>
            <p>
              في فترة دراسته الجامعية، وعلى الرغم من شغفه في تعلم الحاسب اختار
              سمير تخصص الهندسة الكيميائية ليضمن له وظيفة مرموقة ، حيث كان تخصص
              علوم الحاسب تخصصاً حديثاً ولم يكن له طلب كبير في سوق العمل. استمر
              في تخصص الهندسة الكيميائية لمدة سنتين حتى في يوم من الأيام وبعد
              خروجه من أحد المعامل الكيميائية في الجامعة صادف سمير طلاب الحاسب
              لحظة خروجهم من إحدى المحاضرات وبيدهم نفس الكتاب الذي كان يدرسه في
              منزله! في تلك اللحظة قرر سمير أن يأخذ قراراً مصيرياً، فقد قام
              بتغيير تخصصه لأنه لم يعد يستطع أن يقاوم شغفه وحبه لتقنية.
            </p>
            <p>
              بعد تخرجه من جامعة الملك فهد للبترول والمعادن، عمل سمير في شركة
              أرامكو لمدة ١٠ سنوات حيث قاد عدة مشاريع وفرق تقنية. كما أكمل
              دراسته للماجستير في علوم الحاسب في جامعة كولورادو الأمريكية، لكنه
              شعر بأن العمل الروتيني يحد من إبداعه ويقيد روحه الريادية. ولذلك،
              قرر أن يغادر السلك الوظيفي التقليدي ويبدأ رحلته في ريادة الأعمال.
            </p>
            <p>
              بدأت رحلته الريادية عام ٢٠٠٢ عندما أطلق متجر الحاسوب الذهبي حيث
              كانت بداية انتشار أجهزة الحاسب في المملكة، وأنشأ له متجر إلكتروني
              (E-Commerce) للبيع عبر الإنترنت. كان متجر الحاسوب الذهبي من أوائل
              المتاجر الإلكترونية السعودية إن لم يكن الأول فالفكرة كانت سابقة
              عهدها.
            </p>
            <p>
              في عام ٢٠٠٤ قام بإطلاق أحد أهم مشاريعه وهي شركة برامج المستقبل حيث
              كانت من أوائل الشركات السعودية في تطوير البرمجيات. حققت برامج
              المستقبل نجاحاً هائلاً فقد كانت أحد أهم المزودين للخدمات البرمجية
              للشركات في المنطقة. ساهمت أيضا برامج المستقبل في تدريب وتخريج
              العديد من التقنيين والقادة الذين يشغلون أهم المناصب في البلاد
              الآن.
            </p>
            <p>
              في عام ٢٠١٢ قام سمير وبمساعدة شريكه صالح المطيري بإطلاق منصة دفاتر
              لخدمات إدارة الموارد المؤسسية السحابية، وهي عبارة عن منصة أونلاين
              لإدارة جميع الموارد للشركات المتوسطة والصغيرة مقابل اشتراك شهري.
              تعد دفاتر سابقة في السوق فهي أول من بدأ بتقديم خدمات سحابية من هذا
              النوع في المنطقة (SaaS).{" "}
            </p>
            <p>
              بفضل نجاحاته، تم تصنيف سمير كأحد أكثر رواد الأعمال إبداعًا في
              المملكة العربية السعودية من قبل مجلة فوربس في عام ٢٠١٥.
            </p>
            <p>
              وفي الفترة الأخيرة، شارك سمير في عدة مشاريع للتحول الرقمي في
              المملكة، بما في ذلك التحول الرقمي في جسر الملك فهد، وكذلك في إنشاء
              العديد من الشركات الناشئة الحديثة مثل بزنس كود.
            </p>
            <p>
              اليوم، يهدف سمير إلى توجيه خبرته وشغفه التقني نحو مساعدة رواد
              الأعمال غير التقنيين في بناء حلول تقنية مبتكرة، ولذلك، أسس شركة
              صانعي الأحلام.
            </p>
          </div>
        </div>
        {/* <div className={Styles.title}>
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
        )} */}
      </div>

      <img
        className={Styles.bgObject01}
        src="./assets/bgObject01.svg"
        alt="bg art"
      />
    </section>
  );
}
