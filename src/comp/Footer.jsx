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
                Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam{" "}
              </p>
            </div>
            <div className={Styles.group}>
              <h5>الموقع الإلكتروني</h5>
              <div className={Styles.links}>
                <div className={Styles.link}>من نحن</div>
                <div className={Styles.link}>المدونة</div>
              </div>
            </div>
            <div className={Styles.group}>
              <h5>الشركة</h5>
              <div className={Styles.links}>
                <div className={Styles.link}>حول</div>
                <div className={Styles.link}>خدماتنا</div>
              </div>
            </div>
            <div className={Styles.group}>
              <h5>تواصل معنا</h5>
              <div className={Styles.links}>
                <div className={Styles.link}>+201092124608</div>
                <div className={Styles.link}>islamsayedr@gmail.com</div>
              </div>
            </div>
          </div>
          <div className={Styles.socialLinks}>
            <a href="#">
              <img src="./icons/fb.svg" alt="facebook icon" />
            </a>
            <a href="#">
              <img src="./icons/insta.svg" alt="instagram icon" />
            </a>
            <a href="#">
              <img src="./icons/twitter.svg" alt="twitter icon" />
            </a>
            <a href="#">
              <img src="./icons/linkedin.svg" alt="linkedin icon" />
            </a>
            <a href="#">
              <img src="./icons/yt.svg" alt="youtuble icon" />
            </a>
          </div>
        </div>
        <div className={Styles.tail}>
          حقوق النشر محفوظة © 2023 ❣ صانعى الاحلام.
        </div>
      </div>
      <img className={Styles.bgObject01} src="./assets/bgObject03.svg" alt="bg art" />
    </section>
  );
}
