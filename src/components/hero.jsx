import "../styles/hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-box">
        <h1>
          Prajna <span>EP</span>
        </h1>

        <h2>Gesix GeoAI Intern · Frontend Developer</h2>

        <p className="hero-desc">
          I’m a frontend-focused developer who enjoys building clean,
          responsive, and user-friendly web interfaces using React and modern
          JavaScript. I like working on real-world projects, refining UI
          details, and continuously improving my development skills through
          hands-on experience.
        </p>

        <p className="hero-sub">
          Scroll down to explore my skills, projects, and academic journey.
        </p>
      </div>
    </section>
  );
};

export default Hero;
