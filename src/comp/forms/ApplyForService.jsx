import Styles from "./ApplyNow.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

export default function ApplyForService() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    data: {
      name: "",
      email: "",
      phone: "",
      project: "",
      type: "خدمة",
      state: "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      data: {
        ...prevFormData.data,
        [name]: value,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://dreamy-backend.azurewebsites.net/api/req",
        // "http://localhost:1337/api/req",
        formData
      );

      // Reset the form after successful submission
      setFormData({
        data: {
          name: "",
          email: "",
          phone: "",
          project: "",
          type: "خدمة",
          state: "",
        },
      });
      navigate("/requestConfirmation");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <section className={Styles.whydb}>
      <div className={`secContainer ${Styles.container}`}>
        <div className={Styles.title}>
          <img src="./assets/dotIcon.svg" alt="dotIcon" />
          <h2>تقديم طلب شراكة كخدمة</h2>
        </div>
        <p>الرجاء ملئ البيانات التالية والضغط على ارسال الطلب</p>

        <form onSubmit={handleSubmit}>
          <div className={Styles.input}>
            <label htmlFor="name">الاسم</label>
            <input
              type="text"
              name="name"
              placeholder="اكتب الاسم هنا..."
              value={formData.data.name}
              onChange={handleChange}
            />
          </div>
          <div className={Styles.row}>
            <div className={Styles.input}>
              <label htmlFor="email">البريد الالكترونى</label>
              <input
                type="email"
                name="email"
                placeholder="اكتب الايميل هنا..."
                value={formData.data.email}
                onChange={handleChange}
              />
            </div>
            <div className={Styles.input}>
              <label htmlFor="phone">رقم الهاتف</label>
              <input
                type="tel"
                name="phone"
                placeholder="ادخل رقم الهاتف هنا..."
                value={formData.data.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* <div className={Styles.input}>
            <label htmlFor="type">نوع الطلب</label>
            <div className={Styles.radioBtn}>
              <label>
                <input
                  type="radio"
                  name="type"
                  value="شراكة تقنية مقابل ملكية"
                  checked={formData.data.type === "شراكة تقنية مقابل ملكية"}
                  onChange={handleChange}
                />
                شراكة تقنية مقابل ملكية
              </label>
              <label>
                <input
                  type="radio"
                  name="type"
                  value="شراكة تقنية كخدمة"
                  checked={formData.data.type === "شراكة تقنية كخدمة"}
                  onChange={handleChange}
                />
                شراكة تقنية كخدمة
              </label>
            </div>
          </div> */}
          <div className={Styles.input}>
            <label htmlFor="state">في أي مرحلة أنت الآن؟</label>
            <select
              name="state"
              value={formData.data.state}
              onChange={handleChange}
            >
              <option className={Styles.option} value="">
                اختر المرحلة...
              </option>
              <option className={Styles.option} value="فكرة جديدة">
                فكرة جديدة
              </option>
              <option className={Styles.option} value="تحت التطوير">
                تحت التطوير
              </option>
              <option className={Styles.option} value="تم تطوير المنتج الأولي">
                تم تطوير المنتج الأولي
              </option>
              <option
                className={Styles.option}
                value="منتج قائم وتم التحقق من صحته"
              >
                منتج قائم وتم التحقق من صحته
              </option>
            </select>
          </div>

          <div className={Styles.input}>
            <label htmlFor="project">وصف</label>
            <textarea
              name="project"
              placeholder="اكتب تفاصيل المشروع هنا..."
              value={formData.data.project}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="submit">
            {" "}
            ارسال الطلب
          </button>
        </form>
      </div>
    </section>
  );
}
