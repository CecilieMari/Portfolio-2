import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import image1 from "../../components/img/FrameWork.png";
import image2 from "../../components/img/eksamen.png";

const projects = [
  {
    image: image1,
    title: "JavaScript Frameworks CA",
    description:
      "A React-based eCommerce store built as my first project using a JavaScript framework. Users can browse products, view details, add items to their cart, and complete purchases.",
    link1: { url: "https://github.com/dittrepo1", text: "GitHub" },
    link2: { url: "https://prosjekt1-demo.com", text: "Demo" },
  },
  {
    image: image2,
    title: "Project Exam 2",
    description: "Kort forklaring om prosjekt 2.",
    link1: { url: "https://github.com/dittrepo2", text: "GitHub" },
    link2: { url: "https://prosjekt2-demo.com", text: "Demo" },
  },
];

const Home = () => {
  return (
    <div className="container py-5">
      <h1 className="mb-4">Portfolio</h1>
      <div className="row justify-content-center">
        {projects.map((proj, idx) => (
          <div className="col-md-5 col-lg-4 mb-4" key={idx}>
            <div className="card h-100 shadow-sm">
              <img
                src={proj.image}
                alt={proj.title}
                className="card-img-top"
                style={{ height: "180px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{proj.title}</h5>
                <p className="card-text">{proj.description}</p>
                <div className="mt-auto">
                  <a
                    href={proj.link1.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm me-2"
                  >
                    {proj.link1.text}
                  </a>
                  <a
                    href={proj.link2.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary btn-sm"
                  >
                    {proj.link2.text}
                  </a>
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
