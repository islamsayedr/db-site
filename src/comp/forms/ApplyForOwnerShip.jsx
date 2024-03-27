import Styles from "./ApplyNow.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

export default function ApplyForOwnerShip() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    data: {
      name: "",
      email: "",
      whatsapp: "",
      linkedin: "",
      phase: "",
      validation: "",
      projectBudget: "",
      developmentBudget: "",
      description: "",
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
        "https://dreamy-backend.azurewebsites.net/api/ownership-reqs",
        // "http://localhost:1337/api/req",
        formData
      );

      // Reset the form after successful submission
      setFormData({
        data: {
          name: "",
          email: "",
          whatsapp: "",
          linkedin: "",
          phase: "",
          validation: "",
          projectBudget: "",
          developmentBudget: "",
          description: "",
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
          <h2>تقديم طلب شراكة مقابل ملكية</h2>
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
              <label htmlFor="whatsapp">رقم الواتس اب</label>
              <input
                type="tel"
                name="whatsapp"
                placeholder="ادخل رقم الهاتف المرتبط بواتس اب هنا..."
                value={formData.data.whatsapp}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className={Styles.input}>
            <label htmlFor="linkedin">رابط لينكدان</label>
            <input
              type="text"
              name="linkedin"
              placeholder="اكتب رابط لينكدان هنا..."
              value={formData.data.linkedin}
              onChange={handleChange}
            />
          </div>

          <div className={Styles.input}>
            <label htmlFor="phase">في أي مرحلة أنت الآن؟</label>
            <select
              name="phase"
              value={formData.data.phase}
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
            <label htmlFor="validation">هل تم التحقق من الفكرة وبأي طريقة؟</label>
            <div className={Styles.radioBtn}>
              <label>
                <input
                  type="radio"
                  name="validation"
                  value="لا, لم يتم التحقق"
                  checked={formData.data.validation === "لا, لم يتم التحقق"}
                  onChange={handleChange}
                />
                لا, لم يتم التحقق
              </label>
              <label>
                <input
                  type="radio"
                  name="validation"
                  value="نعم, تم عن طريق تحقيق دخل معقول"
                  checked={
                    formData.data.validation === "نعم, تم عن طريق تحقيق دخل معقول"
                  }
                  onChange={handleChange}
                />
                نعم, تم عن طريق تحقيق دخل معقول
              </label>
              <label>
                <input
                  type="radio"
                  name="validation"
                  value="نعم, تم عن طريق دخول مستثمر"
                  checked={
                    formData.data.validation === "نعم, تم عن طريق دخول مستثمر"
                  }
                  onChange={handleChange}
                />
                نعم, تم عن طريق دخول مستثمر
              </label>
            </div>
          </div>

          <div className={Styles.row}>
            <div className={Styles.input}>
              <label htmlFor="projectBudget">
                ماهي ميزانية المشروع التقريبية؟ (خياري)
              </label>
              <input
                type="number"
                name="projectBudget"
                placeholder="اكتب الرقم بالريال  هنا..."
                value={formData.data.projectBudget}
                onChange={handleChange}
              />
            </div>
            
            <div className={Styles.input}>
              <label htmlFor="developmentBudget">
                ماهي ميزانية التطوير التقريبية؟ (خياري)
              </label>
              <input
                type="number"
                name="developmentBudget"
                placeholder="اكتب الرقم بالريال  هنا..."
                value={formData.data.developmentBudget}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={Styles.input}>
            <label htmlFor="description">وصف</label>
            <textarea
              name="description"
              placeholder="اكتب تفاصيل المشروع هنا..."
              value={formData.data.description}
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
