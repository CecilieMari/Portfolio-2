import style from "./about.module.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import profileImg from "../../components/img/My Post.png";

function About() {
  return (
    <div
      className="container py-5"
      style={{ fontFamily: "Playfair Display, serif" }}
    >
      <h1>-01/ABOUT</h1>
      <div className={style.aboutDividerTop}></div>
      <div
        className={`row align-items-center position-relative ${style.aboutPage}`}
      >
        <div className={`col-md-6 ${style.aboutText}`}>
          <p>
            Creativity has always been at the heart of what I do. From studying
            graphic design and working with textiles to developing websites,
            I’ve always been drawn to combining structure and expression. My
            studies at The Scandinavian Design College in Denmark taught me the
            importance of process and storytelling, and now, as a frontend
            developer, I bring that same mindset into digital spaces. Outside of
            coding, I’m passionate about photography — capturing the same
            balance of light and detail that inspires my design work.
          </p>
        </div>
        <div className="col-md-6 text-center">
          <img src={profileImg} alt="Profile" className={style.profileImg} />
        </div>
      </div>
      <h2>- 02/Contact</h2>
      <div className={style.aboutDividerBottom}></div>
      <div className={`row mt-4`}>
        <div className={`col-md-6 ${style.aboutText}`}>
          <p>
            If you’d like to get in touch, feel free to reach out via email or
            connect with me on LinkedIn. I’m always open to discussing new
            projects, ideas, or opportunities.
          </p>
        </div>
        <div className="col-md-6">
          <p>Email: ceciliemarimonsen@gmail.com</p>
          <p>LinkedIn: www.linkedin.com/in/cecilie-monsen-b471662b7</p>
          <p>Instagram: @ceciliemarim</p>
        </div>
      </div>
    </div>
  );
}

export default About;
