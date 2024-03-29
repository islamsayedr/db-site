import { useEffect, useState } from "react";
import Styles from "./LatestProjects.module.css";
import ProjectCard from "./ProjectCard";
import Btn from "../shared/Btn";

export default function LatestProjects({ baseURL }) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${baseURL}/api/proj?populate=*`);
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        setProjects(data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [baseURL]);

  return (
    <section>
      <div className={`secContainer ${Styles.container}`}>
        <div className={Styles.title}>
          <img src="./assets/dotIcon.svg" alt="dotIcon" />
          <h2>احدث الشراكات</h2>
        </div>
        {loading && (
          <>
            <img
              className={Styles.webSkelton}
              src="./imgs/projectSkeltonWeb.svg"
            />
            <img
              className={Styles.mobSkelton}
              src="./imgs/projectSkeltonMob.svg"
            />
          </>
        )}
        {error && <p>Error: {error}</p>}
        {!loading && !error && (
          <div className={Styles.cards}>
            {projects.slice(-2).map((project) => {
              const id = project.id;
              const cover = `${baseURL}${project.attributes.cover.data[0].attributes.url}`;
              const logo = `${baseURL}${project.attributes.logo.data.attributes.url}`;
              const name = project.attributes.name;
              const des = project.attributes.des;
              const keywords = project.attributes.keywords;
              const URL = project.attributes.link;
              const dir = id % 2 === 0 ? "left" : "right";
              return (
                <ProjectCard
                  key={id}
                  cover={cover}
                  logo={logo}
                  title={name}
                  des={des}
                  tags={keywords}
                  dir={dir}
                  URL={URL}
                />
              );
            })}
          </div>
        )}
        <Btn text="عرض المزيد" to="projects" type="wbg" />
      </div>
    </section>
  );
}
