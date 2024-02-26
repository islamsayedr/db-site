import Styles from "./ApplyNow.module.css";
import { useState } from "react";
import axios from "axios";

export default function ApplyNow() {
  const [formData, setFormData] = useState({
    data: {
      name: "",
      email: "",
      phone: "",
      project: "",
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
        "http://localhost:1337/api/req",
        formData
      );

      console.log(response.data);
      // Reset the form after successful submission
      setFormData({
        data: {
          name: "",
          email: "",
          phone: "",
          project: "",
        },
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <section className={Styles.whydb}>
      <div className={`secContainer ${Styles.container}`}>
        <div className={Styles.title}>
          <img src="./assets/dotIcon.svg" alt="dotIcon" />
          <h2>تقديم طلب شراكة</h2>
        </div>
        <p>برجاء ملئ البيانات التالية والضغط على ارسال الطلب</p>

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
          <div className={Styles.input}>
            <label htmlFor="project">وصف المشروع</label>
            <textarea
              name="project"
              placeholder="اكتب تفاصيل المشروع هنا..."
              value={formData.data.project}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="submit"> ارسال الطلب</button>
        </form>
      </div>
    </section>
  );
}
