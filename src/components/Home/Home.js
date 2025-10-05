import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Home.module.css";
import image1 from "../../components/img/FrameWork.png";
import image2 from "../../components/img/eksamen.png";
import { useRef } from "react";

const projects = [
  {
    image: image1,
    title: "JavaScript Frameworks CA",
    description:
      "A React-based eCommerce store built as my first project using a JavaScript framework. The goal of the assignment was to learn component-based development and state management in React. Users can browse products, view details, add them to a shopping cart, and complete a purchase. The project focuses on dynamic data handling, responsive design, and a clean, user-friendly interface.",
    link1: {
      url: "https://github.com/CecilieMari/FrameworksCA.git",
      text: "GitHub",
    },
    link2: { url: "https://frameworkca.netlify.app/", text: "Demo" },
  },
  {
    image: image2,
    title: "Project Exam 2",
    description:
      "Holidaze is a modern accommodation booking platform built with React and the Noroff Holidaze API. The website allows users to browse and book venues, while registered venue managers can create, edit, and manage their own listings. The goal of the project was to create a full-featured frontend application that integrates user authentication, dynamic API data, and responsive design.",
    link1: {
      url: "https://github.com/CecilieMari/Project-Exam-2.git",
      text: "GitHub",
    },
    link2: { url: "https://project-exam-holidaze.netlify.app/", text: "Demo" },
  },
];

const Home = () => {
  const projectsRef = useRef(null);

  const handleScroll = () => {
    projectsRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div
      className="container py-5"
      style={{ fontFamily: "Playfair Display, serif" }}
    >
      <div className={styles.homePage}>
        <h1 className={styles.customH1}>Hey, I'm Cecilie </h1>
        <h2 className={styles.customH2}>
          I design and build clean, user-friendly web experiences.
        </h2>
        <p>SCROLL TO EXPLORE</p>
        <button
          className={styles.downArrow}
          onClick={handleScroll}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "2rem",
          }}
          aria-label="Scroll to projects"
        >
          &#x2193;
        </button>
      </div>
      <div ref={projectsRef} className="row justify-content-center gap-4">
        {projects.map((proj, idx) => (
          <div className="card mb-3" style={{ maxWidth: "540px" }} key={idx}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={proj.image}
                  className="img-fluid rounded-start"
                  alt={proj.title}
                  style={{ height: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body d-flex flex-column h-100">
                  <h5 className="card-title">{proj.title}</h5>
                  <p className="card-text">{proj.description}</p>
                  <div className="mt-auto">
                    <a
                      href={proj.link1.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.projectBtn}
                    >
                      {proj.link1.text}
                    </a>
                    <a
                      href={proj.link2.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.projectBtn}
                    >
                      {proj.link2.text}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Home;
