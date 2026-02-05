import {
  FaHome,
  FaTools,
  FaProjectDiagram,
  FaGraduationCap,
  FaCertificate,
} from "react-icons/fa";
import "../styles/header.css";

const Header = () => {
  return (
    <header className="header">
      <a href="#home" className="logo">
        <span className="logo-full">Prajna</span>
        <span className="logo-short">P</span>
      </a>

      <nav className="nav">
        <a href="#home" aria-label="Home">
          <FaHome />
          <span className="nav-text">Home</span>
        </a>

        <a href="#tech" aria-label="Skills">
          <FaTools />
          <span className="nav-text">Skills</span>
        </a>

        <a href="#projects" aria-label="Projects">
          <FaProjectDiagram />
          <span className="nav-text">Projects</span>
        </a>
      </nav>
    </header>
  );
};

export default Header;
