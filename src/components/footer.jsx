import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="footer-icons">
        <a
          href="https://www.linkedin.com/in/your-linkedin"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/PrajnaEp"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>

        <a href="mailto:your-email@gmail.com" aria-label="Email">
          <FaEnvelope />
        </a>
      </div>

      <p className="footer-text">© {new Date().getFullYear()} Prajna EP</p>
    </footer>
  );
};

export default Footer;
