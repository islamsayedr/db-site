import { Link } from "react-router-dom";
import Styles from "./Footer.module.css";

export default function Footer() {
  return (
    <section className={Styles.footer}>
      <div className={`secContainer ${Styles.container}`}>
        <div className={Styles.body}>
          <div className={Styles.siteLinks}>
            <div className={Styles.brand}>
              <img src="./assets/logo.svg" alt="" />
              <p>
                نحن شركاؤك التقنيين، نتولى الجانب التقني بالكامل، بما في ذلك
                إعداد البيئة المناسبة وتطوير منتجك التقني وتقديم الدعم المستمر.
                دعنا نهتم بالتقنية بينما تركز أنت على جانب الاعمال.
              </p>
            </div>
            <div className={Styles.group}>
              <h5>الموقع الإلكتروني</h5>
              <div className={Styles.links}>
                <Link to="aboutUs" className={Styles.link}>
                  من نحن
                </Link>
                <Link to="projects" className={Styles.link}>
                  اعمالنا
                </Link>
                {/* <Link to="process" className={Styles.link}>
                  كيف يتم الامر
                </Link> */}
              </div>
            </div>
            {/* <div className={Styles.group}>
              <h5>الشركة</h5>
              <div className={Styles.links}>
                <div className={Styles.link}>حول</div>
                <div className={Styles.link}>خدماتنا</div>
              </div>
            </div> */}
            <div className={Styles.group}>
              <h5>تواصل معنا</h5>
              <div className={Styles.links}>
                <a href="tel:+966565733017" className={Styles.link}>
                  +966565733017
                </a>
                <a
                  href="mailto:info@dreamybuilders.com"
                  className={Styles.link}
                >
                  info@dreamybuilders.com
                </a>
                <div className={Styles.socialLinks}>
                  {/* <a href="#">
              <img src="./icons/fb.svg" alt="facebook icon" />
            </a>
            <a href="#">
              <img src="./icons/insta.svg" alt="instagram icon" />
            </a> */}
                  <a href="https://x.com/dreamybuilders?s=11" rel="noreferrer" target="_blank">
                    <img src="./icons/twitter.svg" alt="twitter icon" />
                  </a>
                  <a href="https://www.linkedin.com/company/dreamy-builders/" rel="noreferrer" target="_blank">
                    <img src="./icons/linkedin.svg" alt="linkedin icon" />
                  </a>
                  {/* <a href="#">
              <img src="./icons/yt.svg" alt="youtuble icon" />
            </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.tail}>
          حقوق النشر محفوظة © 2023 ❣ صانعى الاحلام.
        </div>
      </div>
      <img
        className={Styles.bgObject01}
        src="./assets/bgObject03.svg"
        alt="bg art"
      />
    </section>
  );
}
