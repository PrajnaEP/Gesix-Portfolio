import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaPython,
  FaChartBar,
} from "react-icons/fa";
import "../styles/techStack.css";

const TechStack = () => {
  return (
    <section id="tech" className="tech-section">
      <div className="container">
        <h2 className="section-title">Skills</h2>

        <h3 className="sub-title">Proficient</h3>
        <div className="skills-grid">
          <SkillCard icon={<FaHtml5 />} name="HTML" />
          <SkillCard icon={<FaCss3Alt />} name="CSS" />
          <SkillCard icon={<FaJs />} name="JavaScript" />
          <SkillCard icon={<FaReact />} name="React" />
          <SkillCard icon={<FaJava />} name="Java" />
          <SkillCard icon={<FaDatabase />} name="MySQL" />
        </div>

        <h3 className="sub-title">Familiar</h3>
        <div className="skills-grid muted">
          <SkillCard icon={<FaGitAlt />} name="Git" />
          <SkillCard icon={<FaGithub />} name="GitHub" />
          <SkillCard icon={<FaPython />} name="Python" />
          <SkillCard icon={<FaChartBar />} name="Power BI" />
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ icon, name }) => (
  <div className="skill-card">
    <div className="skill-icon">{icon}</div>
    <p>{name}</p>
  </div>
);

export default TechStack;
