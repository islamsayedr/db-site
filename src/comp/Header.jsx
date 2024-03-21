import { Outlet, NavLink, Link } from "react-router-dom";
import styles from "./Header.module.css";
// import Btn from "./Btn";
import { useState } from "react";
export default function Header() {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  function openSideBar() {
    setSideBarOpen((prevState) => !prevState);
  }
  return (
    <>
    <span className={styles.ad}>نعتذر اذا حدث خطأ نعمل على تحديث الموقع</span>
      <header className={styles.header}>
        <div className={styles.secCont}>
          <img
            className={styles.burgerMneu}
            src={sideBarOpen === true ? "./icons/x.svg" : "./assets/menu.svg"}
            alt="burger menu"
            onClick={openSideBar}
            style={{ cursor: "pointer" }}
          />
          <Link to="/">
            <img
              className={styles.logo}
              src="./assets/logo.svg"
              alt="dearmy builder logo"
            />
          </Link>

          <ul className={styles.nav} id="nav">
            <li className={`${styles.navLink} navLink`}>
              <NavLink to="/">الرئيسية</NavLink>
            </li>
            {/* <li className={`${styles.navLink} navLink`}>
              <NavLink to="Services">خدماتنا</NavLink>
            </li> */}
            <li className={`${styles.navLink} navLink`}>
              <NavLink to="projects">اعمالنا</NavLink>
            </li>
            {/* <li className={`${styles.navLink} navLink`}>
              <NavLink to="process">كيف يتم الامر</NavLink>
            </li> */}
            <li className={`${styles.navLink} navLink`}>
              <NavLink to="prices">الباقات</NavLink>
            </li>
            {/* <li className={`${styles.navLink} navLink`}>
              <NavLink to="blogs">المدونة</NavLink>
            </li> */}
            {/* <li className={`${styles.navLink} navLink`}>
              <NavLink to="aboutUs">الأسئلة المتكررة</NavLink>
            </li> */}
            <li className={`${styles.navLink} navLink`}>
              <NavLink to="aboutUs">تعرف علينا</NavLink>
            </li>
            <li className={`${styles.navLink} navLink`}>
              <NavLink to="faqs">الاسئلة المتكررة</NavLink>
            </li>
          </ul>
          {/* <Btn text="قدم طلب" to="apply" /> */}
        </div>
      </header>
      {sideBarOpen ? <SideBar openSideBar={openSideBar} /> : null}
      <Outlet />
    </>
  );
}

const SideBar = (openSideBar) => {
  return (
    <div className={styles.sideBar} id="sideBar">
      <ul className={styles.sideBarLinks}>
        <li className={`${styles.navLink} navLink`} onClick={openSideBar}>
          <NavLink to="/">الرئيسية</NavLink>
        </li>
        {/* <li className={`${styles.navLink} navLink`}>
          <NavLink to="Services">خدماتنا</NavLink>
        </li> */}
        <li className={`${styles.navLink} navLink`} onClick={openSideBar}>
          <NavLink to="projects">اعمالنا</NavLink>
        </li>
        {/* <li className={`${styles.navLink} navLink`}>
          <NavLink to="process">كيف يتم الامر</NavLink>
        </li> */}
        <li className={`${styles.navLink} navLink`} onClick={openSideBar}>
          <NavLink to="prices">الباقات</NavLink>
        </li>
        {/* 
        <li className={`${styles.navLink} navLink`}>
          <NavLink to="blogs">المدونة</NavLink>
        </li>
        <li className={`${styles.navLink} navLink`}>
              <NavLink to="aboutUs">الأسئلة المتكررة</NavLink>
            </li> */}
        <li className={`${styles.navLink} navLink`} onClick={openSideBar}>
          <NavLink to="aboutUs">تعرف علينا</NavLink>
        </li>
        <li className={`${styles.navLink} navLink`} onClick={openSideBar}>
          <NavLink to="faqs">الاسئلة المتكررة</NavLink>
        </li>
      </ul>
    </div>
  );
};
