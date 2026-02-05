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
        <a href="#home">
          <FaHome />
          <span className="nav-text">Home</span>
        </a>
        <a href="#tech">
          <FaTools />
          <span className="nav-text">Skills</span>
        </a>
        <a href="#projects">
          <FaProjectDiagram />
          <span className="nav-text">Projects</span>
        </a>
      </nav>
    </header>
  );
};

export default Header;
