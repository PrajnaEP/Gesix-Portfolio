import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "../styles/projects.css";

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>

        <div className="projects-wrapper">
          <ProjectCard
            title="Todo Hub"
            description="A responsive task management web application that helps users create, update, and organize daily tasks efficiently."
            skills={["HTML", "CSS", "JavaScript", "React"]}
            github="https://github.com/PrajnaEP/ToDoHub"
            live="https://to-do-hub.vercel.app/"
          />

          <ProjectCard
            title="Timetable Genie"
            description="A smart scheduling application developed to generate conflict-free academic timetables for educational institutions."
            skills={["HTML", "CSS", "JavaScript", "React"]}
            github="https://github.com/PrajnaEP/TimeTable_Genie"
            live="https://timetable-genie-v2.vercel.app/"
          />

          <ProjectCard
            title="Farm To Table"
            description="A web platform designed to connect farmers directly with consumers, promoting transparency and fair pricing."
            skills={["HTML", "CSS", "JavaScript", "React"]}
            github="https://github.com/PrajnaEP/FARM_TO_TABLE"
            live="https://farm-to-table-two.vercel.app/"
          />

          <ProjectCard
            title="Resume Build"
            description="An interactive resume builder that allows users to generate professional resumes using structured input forms."
            skills={["HTML", "CSS", "JavaScript", "React"]}
            github="https://github.com/PrajnaEP/ResuBuild"
            live="https://resu-build.vercel.app/"
          />
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ title, description, skills, github, live }) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>

      {/* 🔹 Skill badges */}
      <div className="project-skills">
        {skills.map((skill, index) => (
          <span key={index} className="skill-badge">
            {skill}
          </span>
        ))}
      </div>

      <div className="project-buttons">
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="btn primary"
        >
          <FaGithub /> GitHub
        </a>
        <a
          href={live}
          target="_blank"
          rel="noreferrer"
          className="btn secondary"
        >
          <FaExternalLinkAlt /> Live
        </a>
      </div>
    </div>
  );
};

export default Projects;
